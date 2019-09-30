@MainUITest
Feature: QBE NSW Vehicle Quote

@Scenario
 Scenario: User gets a quote
    Given the user launches a browser to visit the website
    When the user navigate to the NSW quotes page
    Then the user should be able to get an anonymous quote
    Then the user should fill in the necessary information
    Then the user will be able to get his quote and click on finish
    
 


