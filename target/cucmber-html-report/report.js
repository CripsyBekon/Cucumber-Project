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
  "status": "passed"
});
formatter.step({
  "name": "the user will be able to get his quote and click on finish for datagrid test",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.finishButton2()"
});
formatter.result({
  "status": "passed"
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
  "name": "the user should fill in the necessary information using a data grid with \"2009\", \"Ford\", \"SED\", \"PPG\", \"2008-DARLINGTON\" in it",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.completeForms2(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user will be able to get his quote and click on finish for datagrid test",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.finishButton2()"
});
formatter.result({
  "status": "passed"
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
  "name": "the user should fill in the necessary information using a data grid with \"2012\", \"Ford\", \"SED\", \"PRIV\", \"2007-BROADWAY\" in it",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.completeForms2(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user will be able to get his quote and click on finish for datagrid test",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.finishButton2()"
});
formatter.result({
  "status": "passed"
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
  "name": "the user should fill in the necessary information using a data grid with \"2015\", \"Ford\", \"SED\", \"BUSG\", \"2007-BROADWAY\" in it",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.completeForms2(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user will be able to get his quote and click on finish for datagrid test",
  "keyword": "Then "
});
formatter.match({
  "location": "DataGridStep.finishButton2()"
});
formatter.result({
  "status": "passed"
});
});