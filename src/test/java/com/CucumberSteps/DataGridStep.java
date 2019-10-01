package com.CucumberSteps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;
import com.RetrievePaths.*;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DataGridStep {
	WebDriver driver; 
	
	  @Given("^the user launches a browser to visit the website for datagrid test$")
	  public void bootDriver2() throws Throwable {
		  System.setProperty("webdriver.firefox.driver", "geckodriver.exe");
		  System.setProperty(FirefoxDriver.SystemProperty.BROWSER_LOGFILE,"log.txt");
		  driver = new FirefoxDriver();
		  driver.get("https://www.qbe.com/au");
	  }

	 @When("^the user navigate to the NSW quotes page for datagrid test$")
	  public void gotoQuotes2() throws Throwable {
		 //Count the amount of links on the menu
		 CountLinks CT = PageFactory.initElements(driver,CountLinks.class);
		 CT.CountLinkTest();
		 
		 //Navigate to Quote Page
		 HomePagePaths HPP = PageFactory.initElements(driver,HomePagePaths.class);
		 HPP.homePagePaths();
		 
		 //Test if the text "Compulsory Third Party NSW Green Slip Insurance" exists in page
		 HPP.CheckIfTextExists();
		 
		 //Test if the text matches with the title
		 HPP.CompareTitleText(); 
	  }

	  @Then("^the user should be able to get an anonymous quote for datagrid test$")
	  public void getAnonQuote2() throws Throwable {
		 GetQuoteDataGrid GT = PageFactory.initElements(driver,GetQuoteDataGrid.class);
		 GT.getQuote("20/10/2019");
	  }
	  
	  @Then("^the user should fill in the necessary information using a data grid with \\\"(.*)\\\", \\\"(.*)\\\", \\\"(.*)\\\", \\\"(.*)\\\", \\\"(.*)\\\" in it$")
	  public void completeForms2(String Year, String Brand, String Shape, String Usage, String PostCode) throws Throwable {
		  VehicleDetailsDataGrid VD = PageFactory.initElements(driver,VehicleDetailsDataGrid.class);
		  VD.FillForm(Year,Brand,Shape,Usage,PostCode);
		  
		  UserPreferenceDataGrid UP = PageFactory.initElements(driver,UserPreferenceDataGrid.class);
		  UP.RadioInputs("06/09/1956");
	  }
	  
	  @Then("^the user will be able to get his quote and click on finish for datagrid test$")
	  public void finishButton2() throws Throwable {
		  //Get Value of Final Quote
		  FinishQuoteDataGrid FQ = PageFactory.initElements(driver,FinishQuoteDataGrid.class);
		  FQ.QuoteValue();
		  FQ.Finish();
		  driver.close();
	  }  
	}
