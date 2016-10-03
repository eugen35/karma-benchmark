//запускать нужно так mocha -t 5000 end_to_end/index.js - таймаут нужен побольше, ведь браузер открывается и всё такое

var By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    chrome = require('selenium-webdriver/chrome'),
    test = require('selenium-webdriver/testing'),
    assert = require('selenium-webdriver/testing/assert');


test.describe('Google Search', function() {
  var driver;

  test.before(function() {
    driver = new chrome.Driver();
  });

  test.after(function() {
    driver.quit();
  });

/*
  test.it('should append query to title', function() {
    driver.get('http://www.google.com/ncr');
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnG')).click();
    driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  }); */

  test.it('should append query to title', function() {

    //assert(2).equalTo(2,'Равно');
    driver.get('file:///D:/projects/karma-benchmark/index.html');
    assert(driver.getTitle()).equalTo('My Project','Равно');
    /*
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnG')).click();
    driver.wait(until.titleIs('webdriver - Google Search'), 1000);*/
  });

});
