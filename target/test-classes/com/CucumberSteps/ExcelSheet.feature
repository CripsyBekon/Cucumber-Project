@ExcelSheetTest
Feature: Data entry via Excel Worksheet


Scenario: User gets a quote via Excel Spreadsheet
		Given the user launches a browser to visit the website for excel test
    When the user navigate to the NSW quotes page for excel test
    Then the user should fill in the necessary information obtained from the excel sheet from "Data.xlsx"
    