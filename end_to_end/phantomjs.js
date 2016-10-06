//запускать нужно так mocha -t 10000 end_to_end/index.js - таймаут нужен побольше, ведь браузер открывается и всё такое
//js api webdriver(см. меню справа) http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index.html


var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect

var By = require('selenium-webdriver').By;

//setup custom PhantomJS capability
var selenium = require('selenium-webdriver');
var phantomjs_exe = require('phantomjs-prebuilt').path;
var customPhantom = selenium.Capabilities.phantomjs();
customPhantom.set("phantomjs.binary.path", phantomjs_exe);

var driver = new selenium.Builder().
withCapabilities(customPhantom).
build();


describe('PhantomJS: 1 Проверяем index.html', function() {
  /* Не знаю, зачем это делать каждый раз... Как было показано в официальной документации на примере драйвера chrome. Всё ведь работает
  var driver;
  before(function(){
    driver = new selenium.Builder().
    withCapabilities(customPhantom).
    build();
  })*/

describe('1.1 Должно совпадать название и часть текста страницы', function() {

  it('1.1 Должно совпадать название страницы', function() {
    driver.get('file:///D:/projects/karma-benchmark/index.html');
    return expect(driver.getTitle()).to.eventually.equal('My Project');
    //а вот повторное выполнение сравнения работает, видимо, здесь нужно использовать Promise.all() или что-то в этом роде
    //return expect(driver.findElement(By.css('body')).getText()).to.eventually.include('Hello1');
  });


  it('1.2 Должна совпадать часть текста страницы', function() {
    //driver.get('file:///D:/projects/karma-benchmark/index.html');
    return expect(driver.findElement(By.css('body')).getText()).to.eventually.include('Hello');
  });

});
});




