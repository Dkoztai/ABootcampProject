$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EbayAddToCart.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay top menu bar functionality",
  "description": "",
  "id": "ebay-top-menu-bar-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5188438500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Top menu bar should display tabs",
  "description": "",
  "id": "ebay-top-menu-bar-functionality;top-menu-bar-should-display-tabs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "enter ekko in search bar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click buy it now category",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click buy it now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select UBHIB",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "go to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayFilterFunctionality.enter_ekko_in_search_bar()"
});
formatter.result({
  "duration": 3174065500,
  "status": "passed"
});
formatter.match({
  "location": "EbayFilterFunctionality.click_filter_category_button()"
});
formatter.result({
  "duration": 5057311000,
  "status": "passed"
});
formatter.match({
  "location": "EbayFilterFunctionality.click_search_button()"
});
formatter.result({
  "duration": 4824960400,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.click_but_it_now()"
});
formatter.result({
  "duration": 5327176000,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.select_UB()"
});
formatter.result({
  "duration": 6034722600,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.add_to_cart()"
});
formatter.result({
  "duration": 3080003700,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.go_to_cart()"
});
formatter.result({
  "duration": 3938440800,
  "status": "passed"
});
formatter.after({
  "duration": 81200,
  "status": "passed"
});
formatter.uri("EbayEndToEnd.feature");
formatter.feature({
  "line": 2,
  "name": "EbayEndToEndFunctionality",
  "description": "",
  "id": "ebayendtoendfunctionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "user is able to checkout as guest",
  "description": "",
  "id": "ebayendtoendfunctionality;user-is-able-to-checkout-as-guest",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "enter ekko in search bar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click buy it now category",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click buy it now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select UBHIB",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select continue as guest",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "fill out ship to",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select state",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "fill out \"\u003czipcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click done",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify by \"\u003czipcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "fill out pay with",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Confirm and pay",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "ebayendtoendfunctionality;user-is-able-to-checkout-as-guest;",
  "rows": [
    {
      "cells": [
        "zipcode"
      ],
      "line": 23,
      "id": "ebayendtoendfunctionality;user-is-able-to-checkout-as-guest;;1"
    },
    {
      "cells": [
        "33076"
      ],
      "line": 24,
      "id": "ebayendtoendfunctionality;user-is-able-to-checkout-as-guest;;2"
    },
    {
      "cells": [
        "11"
      ],
      "line": 25,
      "id": "ebayendtoendfunctionality;user-is-able-to-checkout-as-guest;;3"
    },
    {
      "cells": [
        "00003"
      ],
      "line": 26,
      "id": "ebayendtoendfunctionality;user-is-able-to-checkout-as-guest;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5024060900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "user is able to checkout as guest",
  "description": "",
  "id": "ebayendtoendfunctionality;user-is-able-to-checkout-as-guest;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "enter ekko in search bar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click buy it now category",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click buy it now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select UBHIB",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select continue as guest",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "fill out ship to",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select state",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "fill out \"33076\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click done",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify by \"33076\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "fill out pay with",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Confirm and pay",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayFilterFunctionality.enter_ekko_in_search_bar()"
});
formatter.result({
  "duration": 3105236200,
  "status": "passed"
});
formatter.match({
  "location": "EbayFilterFunctionality.click_filter_category_button()"
});
formatter.result({
  "duration": 6722618400,
  "status": "passed"
});
formatter.match({
  "location": "EbayFilterFunctionality.click_search_button()"
});
formatter.result({
  "duration": 4011969900,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.click_but_it_now()"
});
formatter.result({
  "duration": 4313081800,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.select_UB()"
});
formatter.result({
  "duration": 6538353100,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.add_to_cart()"
});
formatter.result({
  "duration": 3474930700,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.go_to_cart()"
});
formatter.result({
  "duration": 3958563600,
  "status": "passed"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.go_to_checkout()"
});
formatter.result({
  "duration": 3053642400,
  "status": "passed"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.select_continue_as_guest()"
});
formatter.result({
  "duration": 4666577900,
  "status": "passed"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.fill_out_ship_to()"
});
formatter.result({
  "duration": 29153400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027firstName\u0027]\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-ILM5H2C\u0027, ip: \u0027192.168.1.231\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\dkozt\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60461}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: faf3e51c1667ce1b7aca0bcbc509a4c5\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027firstName\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.clear(Unknown Source)\r\n\tat tt.ebay.pageAction.EbayEndToEndResultActions.ship(EbayEndToEndResultActions.java:55)\r\n\tat tt.ebay.stepDef.EbayEndToEndFunctionality.fill_out_ship_to(EbayEndToEndFunctionality.java:48)\r\n\tat ???.And fill out ship to(EbayEndToEnd.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.select_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "33076",
      "offset": 10
    }
  ],
  "location": "EbayEndToEndFunctionality.fill_out(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.click_done()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "33076",
      "offset": 11
    }
  ],
  "location": "EbayEndToEndFunctionality.verify_by(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.fill_out_pay_with()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.confirm_and_pay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25800,
  "status": "passed"
});
formatter.before({
  "duration": 6908852600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "user is able to checkout as guest",
  "description": "",
  "id": "ebayendtoendfunctionality;user-is-able-to-checkout-as-guest;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "enter ekko in search bar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click buy it now category",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click buy it now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select UBHIB",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select continue as guest",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "fill out ship to",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select state",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "fill out \"11\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click done",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify by \"11\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "fill out pay with",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Confirm and pay",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayFilterFunctionality.enter_ekko_in_search_bar()"
});
formatter.result({
  "duration": 3079717600,
  "status": "passed"
});
formatter.match({
  "location": "EbayFilterFunctionality.click_filter_category_button()"
});
formatter.result({
  "duration": 6466099600,
  "status": "passed"
});
formatter.match({
  "location": "EbayFilterFunctionality.click_search_button()"
});
formatter.result({
  "duration": 4072260000,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.click_but_it_now()"
});
formatter.result({
  "duration": 4564823600,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.select_UB()"
});
formatter.result({
  "duration": 6397808800,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.add_to_cart()"
});
formatter.result({
  "duration": 3460166600,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.go_to_cart()"
});
formatter.result({
  "duration": 3897885600,
  "status": "passed"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.go_to_checkout()"
});
formatter.result({
  "duration": 3055566100,
  "status": "passed"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.select_continue_as_guest()"
});
formatter.result({
  "duration": 4572315000,
  "status": "passed"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.fill_out_ship_to()"
});
formatter.result({
  "duration": 22913200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027firstName\u0027]\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-ILM5H2C\u0027, ip: \u0027192.168.1.231\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\dkozt\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53344}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3344966f4c665628b6fac3da6311ca9f\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027firstName\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.clear(Unknown Source)\r\n\tat tt.ebay.pageAction.EbayEndToEndResultActions.ship(EbayEndToEndResultActions.java:55)\r\n\tat tt.ebay.stepDef.EbayEndToEndFunctionality.fill_out_ship_to(EbayEndToEndFunctionality.java:48)\r\n\tat ???.And fill out ship to(EbayEndToEnd.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.select_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 10
    }
  ],
  "location": "EbayEndToEndFunctionality.fill_out(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.click_done()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 11
    }
  ],
  "location": "EbayEndToEndFunctionality.verify_by(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.fill_out_pay_with()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.confirm_and_pay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23600,
  "status": "passed"
});
formatter.before({
  "duration": 5163168700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "user is able to checkout as guest",
  "description": "",
  "id": "ebayendtoendfunctionality;user-is-able-to-checkout-as-guest;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "enter ekko in search bar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click buy it now category",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click buy it now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select UBHIB",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select continue as guest",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "fill out ship to",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select state",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "fill out \"00003\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click done",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify by \"00003\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "fill out pay with",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Confirm and pay",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayFilterFunctionality.enter_ekko_in_search_bar()"
});
formatter.result({
  "duration": 3115075800,
  "status": "passed"
});
formatter.match({
  "location": "EbayFilterFunctionality.click_filter_category_button()"
});
formatter.result({
  "duration": 6875249500,
  "status": "passed"
});
formatter.match({
  "location": "EbayFilterFunctionality.click_search_button()"
});
formatter.result({
  "duration": 4151825800,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.click_but_it_now()"
});
formatter.result({
  "duration": 4421768900,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.select_UB()"
});
formatter.result({
  "duration": 6171963100,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.add_to_cart()"
});
formatter.result({
  "duration": 3369094400,
  "status": "passed"
});
formatter.match({
  "location": "EbayAddToCartSteps.go_to_cart()"
});
formatter.result({
  "duration": 4370595600,
  "status": "passed"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.go_to_checkout()"
});
formatter.result({
  "duration": 3055972000,
  "status": "passed"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.select_continue_as_guest()"
});
formatter.result({
  "duration": 4567894600,
  "status": "passed"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.fill_out_ship_to()"
});
formatter.result({
  "duration": 23125700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027firstName\u0027]\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-ILM5H2C\u0027, ip: \u0027192.168.1.231\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\dkozt\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60735}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d668310a73be24b8645286182c11817b\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027firstName\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.clear(Unknown Source)\r\n\tat tt.ebay.pageAction.EbayEndToEndResultActions.ship(EbayEndToEndResultActions.java:55)\r\n\tat tt.ebay.stepDef.EbayEndToEndFunctionality.fill_out_ship_to(EbayEndToEndFunctionality.java:48)\r\n\tat ???.And fill out ship to(EbayEndToEnd.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.select_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "00003",
      "offset": 10
    }
  ],
  "location": "EbayEndToEndFunctionality.fill_out(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.click_done()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "00003",
      "offset": 11
    }
  ],
  "location": "EbayEndToEndFunctionality.verify_by(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.fill_out_pay_with()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayEndToEndFunctionality.confirm_and_pay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 19200,
  "status": "passed"
});
formatter.uri("EbayFilter.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay top menu bar functionality",
  "description": "",
  "id": "ebay-top-menu-bar-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5324804200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Top menu bar should display tabs",
  "description": "",
  "id": "ebay-top-menu-bar-functionality;top-menu-bar-should-display-tabs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "enter ekko in search bar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click buy it now category",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify buy it now category",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayFilterFunctionality.enter_ekko_in_search_bar()"
});
formatter.result({
  "duration": 3092086500,
  "status": "passed"
});
formatter.match({
  "location": "EbayFilterFunctionality.click_filter_category_button()"
});
formatter.result({
  "duration": 4905248800,
  "status": "passed"
});
formatter.match({
  "location": "EbayFilterFunctionality.click_search_button()"
});
formatter.result({
  "duration": 4127816900,
  "status": "passed"
});
formatter.match({
  "location": "EbayFilterFunctionality.verify_filter_category()"
});
formatter.result({
  "duration": 7268719600,
  "status": "passed"
});
formatter.after({
  "duration": 34200,
  "status": "passed"
});
formatter.uri("EbayRegister.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Registartion",
  "description": "",
  "id": "ebay-registartion",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 9892914700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to create account",
  "description": "",
  "id": "ebay-registartion;user-should-be-able-to-create-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "click register",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "input valid First Name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "input valid Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "input valid Email Registartion",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "input valid Password Registartion",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify create account",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayRegistrationSteps.click_register()"
});
formatter.result({
  "duration": 6186467500,
  "status": "passed"
});
formatter.match({
  "location": "EbayRegistrationSteps.input_valid_First_Name()"
});
formatter.result({
  "duration": 7126500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027firstname\u0027]\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-ILM5H2C\u0027, ip: \u0027192.168.1.231\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\dkozt\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58754}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 81578d6009a22560b315b4e870044c82\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027firstname\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.clear(Unknown Source)\r\n\tat tt.ebay.pageAction.EbayRegistartionResultActions.inputFirstName(EbayRegistartionResultActions.java:18)\r\n\tat tt.ebay.stepDef.EbayRegistrationSteps.input_valid_First_Name(EbayRegistrationSteps.java:24)\r\n\tat ???.And input valid First Name(EbayRegister.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EbayRegistrationSteps.input_valid_Last_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayRegistrationSteps.input_valid_Email_Registartion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayRegistrationSteps.input_valid_Password_Registartion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayRegistrationSteps.verify_create_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20900,
  "status": "passed"
});
formatter.uri("EbaySignin.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Signin Functionality",
  "description": "",
  "id": "ebay-signin-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 7877865600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to sign in",
  "description": "",
  "id": "ebay-signin-functionality;user-should-be-able-to-sign-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "open Ebay homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "input valid Email",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "input valid Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify sign in on homepage account",
  "keyword": "Then "
});
formatter.match({
  "location": "EbaySgininFunctionalitySteps.open_Ebay_home_page()"
});
formatter.result({
  "duration": 3681026700,
  "status": "passed"
});
formatter.match({
  "location": "EbaySgininFunctionalitySteps.click_login_button()"
});
formatter.result({
  "duration": 3053569000,
  "status": "passed"
});
formatter.match({
  "location": "EbaySgininFunctionalitySteps.input_valid_Email()"
});
formatter.result({
  "duration": 27127200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027userid\u0027]\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-ILM5H2C\u0027, ip: \u0027192.168.1.231\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\dkozt\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49923}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4996f9326a3be700bfeae01eda599264\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027userid\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.clear(Unknown Source)\r\n\tat tt.ebay.pageAction.EbaySigninResultActions.inputEmail(EbaySigninResultActions.java:19)\r\n\tat tt.ebay.stepDef.EbaySgininFunctionalitySteps.input_valid_Email(EbaySgininFunctionalitySteps.java:27)\r\n\tat ???.And input valid Email(EbaySignin.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EbaySgininFunctionalitySteps.input_valid_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbaySgininFunctionalitySteps.verify_sign_in_on_homepage_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 37200,
  "status": "passed"
});
formatter.uri("EbayTopMenuBar.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay top menu bar functionality",
  "description": "",
  "id": "ebay-top-menu-bar-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 8542448200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Top menu bar should display tabs",
  "description": "",
  "id": "ebay-top-menu-bar-functionality;top-menu-bar-should-display-tabs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User hovers over top menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User selects category",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify category pages open",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayTopMenuBarFunctionality.user_hovers_over_top_menu()"
});
formatter.result({
  "duration": 5579084500,
  "status": "passed"
});
formatter.match({
  "location": "EbayTopMenuBarFunctionality.user_selects_category()"
});
formatter.result({
  "duration": 6888265000,
  "status": "passed"
});
formatter.match({
  "location": "EbayTopMenuBarFunctionality.verify_category_pages_open()"
});
formatter.result({
  "duration": 6211128200,
  "status": "passed"
});
formatter.after({
  "duration": 38100,
  "status": "passed"
});
});