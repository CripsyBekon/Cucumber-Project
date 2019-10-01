@DataGridTest
Feature: Using Data grids to fill in data
 
Scenario Outline: User gets a quote via data grids
 		Given the user launches a browser to visit the website for datagrid test
    When the user navigate to the NSW quotes page for datagrid test
    Then the user should be able to get an anonymous quote for datagrid test
    Then the user should fill in the necessary information using a data grid with "<Year>", "<Brand>", "<Shape>", "<Usage>", "<PostCode>" in it
    Then the user will be able to get his quote and click on finish for datagrid test  
Examples:
|	Year 				| Brand 			| Shape |	Usage 			|PostCode							|
|	2003				| Ford				|	SED		|	BUSG				| 2007-BROADWAY				|
|	2009				| Ford				|	SED		|	PPG					| 2008-DARLINGTON			|
|	2012				| Ford				|	SED		|	PRIV				| 2007-BROADWAY				|
|	2015	 			| Ford				|	SED		|	BUSG				| 2007-BROADWAY				|	
