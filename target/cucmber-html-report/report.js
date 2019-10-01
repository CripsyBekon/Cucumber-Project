$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/CucumberSteps/DataGrid.feature");
formatter.feature({
  "name": "Using Data grids to fill in data",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DataGridTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User gets a quote via data grids",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user launches a browser to visit the website for datagrid test",
  "keyword": "Given "
});
formatter.step({
  "name": "the user navigate to the NSW quotes page for datagrid test",
  "keyword": "When "
});
formatter.step({
  "name": "the user should be able to get an anonymous quote for datagrid test",
  "keyword": "Then "
});
formatter.step({
  "name": "the user should fill in the necessary information using a data grid with \"\u003cYear\u003e\", \"\u003cBrand\u003e\", \"\u003cShape\u003e\", \"\u003cUsage\u003e\", \"\u003cPostCode\u003e\" in it",
  "keyword": "Then "
});
formatter.step({
  "name": "the user will be able to get his quote and click on finish for datagrid test",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Year",
        "Brand",
        "Shape",
        "Usage",
        "PostCode"
      ]
    },
    {
      "cells": [
        "2003",
        "Ford",
        "SED",
        "BUSG",
        "2007-BROADWAY"
      ]
    },
    {
      "cells": [
        "2009",
        "Ford",
        "SED",
        "PPG",
        "2008-DARLINGTON"
      ]
    },
    {
      "cells": [
        "2012",
        "Ford",
        "SED",
        "PRIV",
        "2007-BROADWAY"
      ]
    },
    {
      "cells": [
        "2015",
        "Ford",
        "SED",
        "BUSG",
        "2007-BROADWAY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User gets a quote via data grids",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DataGridTest"
    }
  ]
});
formatter.step({
  "name": "the user launches a browser to visit the website for datagrid test",
  "keyword": "Given "
});
formatter.match({
  "location": "DataGridStep.bootDriver2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigate to the NSW quotes page for datagrid test",
  "keyword": "When "
});
formatter.match({
  "location": "DataGridStep.gotoQuotes2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to get an anonymous quote for datagrid test",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.getAnonQuote2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should fill in the necessary information using a data grid with \"2003\", \"Ford\", \"SED\", \"BUSG\", \"2007-BROADWAY\" in it",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.completeForms2(String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LTAU00498\u0027, ip: \u0027192.168.1.173\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190717172542, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 17200, moz:profile: C:\\Users\\798015\\AppData\\Loc..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 21212351-d91a-464d-9761-78f3fa73c7ae\n*** Element info: {Using\u003dcss selector, value\u003d#q1 .radio:nth-child(1) \u003e label}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.RetrievePaths.UserPreferenceDataGrid.RadioInputs(UserPreferenceDataGrid.java:42)\r\n\tat com.CucumberSteps.DataGridStep.completeForms2(DataGridStep.java:51)\r\n\tat ✽.the user should fill in the necessary information using a data grid with \"2003\", \"Ford\", \"SED\", \"BUSG\", \"2007-BROADWAY\" in it(file:src/test/java/com/CucumberSteps/DataGrid.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user will be able to get his quote and click on finish for datagrid test",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.finishButton2()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User gets a quote via data grids",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DataGridTest"
    }
  ]
});
formatter.step({
  "name": "the user launches a browser to visit the website for datagrid test",
  "keyword": "Given "
});
formatter.match({
  "location": "DataGridStep.bootDriver2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigate to the NSW quotes page for datagrid test",
  "keyword": "When "
});
formatter.match({
  "location": "DataGridStep.gotoQuotes2()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LTAU00498\u0027, ip: \u0027192.168.1.173\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190717172542, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 14788, moz:profile: C:\\Users\\798015\\AppData\\Loc..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5a6f61cb-ddf1-4000-8ef8-fe1cf600be84\n*** Element info: {Using\u003dcss selector, value\u003d.c-columnContent__content:nth-child(1) \u003e .c-columnContent__buttonContent:nth-child(2) \u003e .c-columnContent__hyperlink}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.RetrievePaths.HomePagePaths.homePagePaths(HomePagePaths.java:35)\r\n\tat com.CucumberSteps.DataGridStep.gotoQuotes2(DataGridStep.java:30)\r\n\tat ✽.the user navigate to the NSW quotes page for datagrid test(file:src/test/java/com/CucumberSteps/DataGrid.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user should be able to get an anonymous quote for datagrid test",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.getAnonQuote2()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should fill in the necessary information using a data grid with \"2009\", \"Ford\", \"SED\", \"PPG\", \"2008-DARLINGTON\" in it",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.completeForms2(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user will be able to get his quote and click on finish for datagrid test",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.finishButton2()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User gets a quote via data grids",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DataGridTest"
    }
  ]
});
formatter.step({
  "name": "the user launches a browser to visit the website for datagrid test",
  "keyword": "Given "
});
formatter.match({
  "location": "DataGridStep.bootDriver2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigate to the NSW quotes page for datagrid test",
  "keyword": "When "
});
formatter.match({
  "location": "DataGridStep.gotoQuotes2()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LTAU00498\u0027, ip: \u0027192.168.1.173\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190717172542, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 16420, moz:profile: C:\\Users\\798015\\AppData\\Loc..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 664c6f1b-7c3a-42e6-aeb8-c7ffb6eb255d\n*** Element info: {Using\u003dtag name, value\u003dli}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByTagName(RemoteWebDriver.java:400)\r\n\tat org.openqa.selenium.By$ByTagName.findElements(By.java:312)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat com.RetrievePaths.CountLinks.CountLinkTest(CountLinks.java:19)\r\n\tat com.CucumberSteps.DataGridStep.gotoQuotes2(DataGridStep.java:26)\r\n\tat ✽.the user navigate to the NSW quotes page for datagrid test(file:src/test/java/com/CucumberSteps/DataGrid.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user should be able to get an anonymous quote for datagrid test",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.getAnonQuote2()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should fill in the necessary information using a data grid with \"2012\", \"Ford\", \"SED\", \"PRIV\", \"2007-BROADWAY\" in it",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.completeForms2(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user will be able to get his quote and click on finish for datagrid test",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.finishButton2()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User gets a quote via data grids",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DataGridTest"
    }
  ]
});
formatter.step({
  "name": "the user launches a browser to visit the website for datagrid test",
  "keyword": "Given "
});
formatter.match({
  "location": "DataGridStep.bootDriver2()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LTAU00498\u0027, ip: \u0027192.168.1.173\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: \r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat com.CucumberSteps.DataGridStep.bootDriver2(DataGridStep.java:18)\r\n\tat ✽.the user launches a browser to visit the website for datagrid test(file:src/test/java/com/CucumberSteps/DataGrid.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user navigate to the NSW quotes page for datagrid test",
  "keyword": "When "
});
formatter.match({
  "location": "DataGridStep.gotoQuotes2()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to get an anonymous quote for datagrid test",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.getAnonQuote2()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should fill in the necessary information using a data grid with \"2015\", \"Ford\", \"SED\", \"BUSG\", \"2007-BROADWAY\" in it",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.completeForms2(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user will be able to get his quote and click on finish for datagrid test",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.finishButton2()"
});
formatter.result({
  "status": "skipped"
});
});