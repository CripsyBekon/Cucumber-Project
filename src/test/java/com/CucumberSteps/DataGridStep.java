package com.CucumberSteps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import com.RetrievePaths.*;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DataGridStep {
	WebDriver driver; 
	
	  @Given("^the user launches a browser to visit the website$")
	  public void bootDriver() throws Throwable {
		  System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		  driver = new ChromeDriver();
		  driver.get("https://www.qbe.com/au");
	  }

	 @When("^the user navigate to the NSW quotes page$")
	  public void gotoQuotes() throws Throwable {
		 //Count the amount of links on the menu
		 CountLinks CT = PageFactory.initElements(driver,CountLinks.class);
		 CT.CountLinkTest();
		 
		 //Navigate to Quote Page
		 HomePagePaths HPP = PageFactory.initElements(driver,HomePagePaths.class);
		 HPP.homePagePaths();
		 
		 //Test if the text "Compulsary Third Party NSW Green Slip Insurance" exists in page
		 HPP.CheckIfTextExists();
		 
		 //Test if the text matches with the title
		 HPP.CompareTitleText(); 
	  }

	  @Then("^the user should be able to get an anonymous quote$")
	  public void getAnonQuote() throws Throwable {
		 GetQuoteDataGrid GT = PageFactory.initElements(driver,GetQuoteDataGrid.class);
		 GT.getQuote("20/10/2019");
	  }
	  
	  @Then("^the user should fill in the necessary information using a data grid with \\\"(.*)\\\", \\\"(.*)\\\", \\\"(.*)\\\", \\\"(.*)\\\", \\\"(.*)\\\" in it$")
	  public void completeForms(String Year, String Brand, String Shape, String Usage, String PostCode) throws Throwable {
		  VehicleDetailsDataGrid VD = PageFactory.initElements(driver,VehicleDetailsDataGrid.class);
		  VD.FillForm(Year,Brand,Shape,Usage,PostCode);
		  
		  UserPreferenceDataGrid UP = PageFactory.initElements(driver,UserPreferenceDataGrid.class);
		  UP.RadioInputs("6/9/1996");
	  }
	  
	  @Then("^the user will be able to get his quote and click on finish$")
	  public void finishButton() throws Throwable {
		  //Get Value of Final Quote
		  FinishQuoteDataGrid FQ = PageFactory.initElements(driver,FinishQuoteDataGrid.class);
		  FQ.QuoteValue();
		  FQ.Finish();
	  }  
	}
