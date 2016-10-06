//запускать нужно так mocha -t 10000 end_to_end/index.js - таймаут нужен побольше, ведь браузер открывается и всё такое
//js api webdriver(см. меню справа) http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index.html

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

//Выбираем браузер (можно безголовый выбрать)
var selenium = require('selenium-webdriver');
var By = selenium.By;


//--------------------------->
//Три строчки ниже нужно закомментировать, если нужно запускать не фантом, а хром (а строчку ниже с хромом раскомментировать)
var phantomjs_exe = require('phantomjs-prebuilt').path; //phantomjs-prebuilt - это пакет npmjs, ему не нужен бинарный драйвер фантома, засунутый в корень папки проекта
var browser = selenium.Capabilities.phantomjs(); //В официальном примере данная переменная называлась не browser, а customPhantom
browser.set("phantomjs.binary.path", phantomjs_exe);

//var browser = selenium.Capabilities.chrome(); //тут пакетов npmjs не нужно, но нужно бинарный драйвер chrome класть в только в корень папки проекта
//--------------------------->

describe('1.1 Должно совпадать название и часть текста страницы', function() {
  var driver;

  before(function(){ //Эта строчка нужна, чтобы инстанс браузера открывался для выполнения всех тестов. Делать это нужно в самом верхнем дескрайбе
    return driver = new selenium.Builder().
    withCapabilities(browser).
    build();
  })

  after(function(){ //Эта строчка нужна, чтобы инстансы браузера (например, открытые окна хрома) закрывались после выполнения всех тестов. Делать это нужно в самом верхнем дескрайбе
    return driver.quit();
  });


  it('1.1 Должно совпадать название страницы', function() {
    driver.get('file:///D:/projects/karma-benchmark/index.html');
    return expect(driver.getTitle()).to.eventually.equal('My Project');
    //а вот повторное выполнение сравнения работает, видимо, здесь нужно использовать Promise.all() или что-то в этом роде
    //return expect(driver.findElement(By.css('body')).getText()).to.eventually.include('Hello1');
  });


  it('1.2 Должна совпадать часть текста страницы', function() {
    return expect(driver.findElement(By.css('body')).getText()).to.eventually.include('Hello');
  });

});


/* Есть возможность как-то сделать команды вебдрайвера синхронными, как в примере ниже (это из офиц. документации вебдрайвера с драйвером хром)...
//Но как это сделать по отношению к фантому, - не изучал (просто по аналогии, - не получается)

 test.it('should append query to title', function() {
 driver.get('http://www.google.com/ncr');
 driver.findElement(By.name('q')).sendKeys('webdriver');
 driver.findElement(By.name('btnG')).click();
 driver.wait(until.titleIs('webdriver - Google Search'), 1000);
 });
 */
