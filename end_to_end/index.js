//запускать нужно так mocha -t 10000 end_to_end/index.js - таймаут нужен побольше, ведь браузер открывается и всё такое
//js api webdriver(см. меню справа) http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index.html

var By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    chrome = require('selenium-webdriver/chrome'), //драйвер firefox что-то глючит (многие пишут), причём не гуглится толком как избавиться от ошибки.
    test = require('selenium-webdriver/testing'),
    assert = require('selenium-webdriver/testing/assert');


test.describe('1 Проверяем index.html', function() {
  var driver;

  test.before(function() {
    driver = new chrome.Driver();
  });

  test.after(function() {
    driver.quit();
  });

  test.it('1.1 Должно совпадать название и часть текста страницы', function() {
    //assert(2).equalTo(2,'Равно');
    driver.get('file:///D:/projects/karma-benchmark/index.html');
    assert(driver.getTitle()).equalTo('My Project', 'Название страницы не совпадает');
    assert(driver.findElement(By.css('body')).getText()).contains('Hello1','Текст Hello не встречается внутри элемента body');
  });

  test.it('1.2 Должна совпадать часть текста страницы', function() {
    driver.get('file:///D:/projects/karma-benchmark/index.html');
    assert(driver.findElement(By.css('body')).getText()).contains('Hello','Текст Hello не встречается внутри элемента body');
  });

   /*
   test.it('should append query to title', function() {
   driver.get('http://www.google.com/ncr');
   driver.findElement(By.name('q')).sendKeys('webdriver');
   driver.findElement(By.name('btnG')).click();
   driver.wait(until.titleIs('webdriver - Google Search'), 1000);
   });
   */

});
