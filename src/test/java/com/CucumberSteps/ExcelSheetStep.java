package com.CucumberSteps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import com.ExcelFeature.ReadFromExcel;
import com.RetrievePaths.*;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ExcelSheetStep {
	WebDriver driver; 
	
	  @Given("^the user launches a browser to visit the website for excel test$")
	  public void bootDriver() throws Throwable {
		  System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		  driver = new ChromeDriver();
		  driver.get("https://www.qbe.com/au");
	  }

	 @When("^the user navigate to the NSW quotes page for excel test$")
	  public void gotoQuotes() throws Throwable {
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
	 
	  @Then("^the user should fill in the necessary information obtained from the excel sheet from \"([^\\\"]*)\"$")
	  public void completeForms(String args1) throws Throwable {
		  
		  ReadFromExcel readFile= new ReadFromExcel("data.xlsx");
			int rowCount = readFile.getRowCount("DataValues");
			for (int rowNum = 2;rowNum <= rowCount; rowNum++) {
			 String Year = readFile.getCellData("DataValues", "Year", rowNum);
			 System.out.println("Manufactured Year: " +Year);
			 String Brand = readFile.getCellData("DataValues", "Make", rowNum);
			 System.out.println("Vehicle Brand: " +Brand);
			 String Shape =readFile.getCellData("DataValues", "Shape", rowNum);
			 System.out.println("Vehicle Shape: " +Shape);
			 String Usage = readFile.getCellData("DataValues", "Usage", rowNum);
			 System.out.println("Usage Type: " +Usage);
			 String postcodeData = readFile.getCellData("DataValues", "PostCode", rowNum);
			 System.out.println("Postcode: " +postcodeData);
			 
			 GetQuote GT = PageFactory.initElements(driver,GetQuote.class);
			 GT.getQuote("20/10/2019");

			WebElement ManYear = driver.findElement(By.cssSelector("#a1"));
			ManYear.sendKeys(Year);
			
			WebElement VeBrand = driver.findElement(By.cssSelector("#a2"));
			Select  Brandbtn = new Select(VeBrand);
			Brandbtn.selectByVisibleText(Brand);
			
			WebElement VeShape = driver.findElement(By.cssSelector("#a3"));
			Select  ShapeBtn = new Select(VeShape);
			ShapeBtn.selectByVisibleText(Shape);
			
			WebElement VeUsage = driver.findElement(By.cssSelector("#a4"));
			Select   VeUsageBtn = new Select(VeUsage);
			VeUsageBtn.selectByVisibleText(Usage);
			
			WebElement postcode = driver.findElement(By.cssSelector("#a5"));
			Select   postcodeBtn = new Select(postcode);
			postcodeBtn.selectByVisibleText(postcodeData);
			WebElement Continue = driver.findElement(By.cssSelector("#button_forward"));
			Continue.click();
			
			
		  UserPreference UP = PageFactory.initElements(driver,UserPreference.class);
		  UP.RadioInputs("06/09/1956");
	  
		  FinishQuote FQ = PageFactory.initElements(driver,FinishQuote.class);
		  FQ.QuoteValue();
		  FQ.Finish();  
		  }
		driver.close();
	  }
	}
