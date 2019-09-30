package com.RetrievePaths;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class UserPreference {
	WebDriver driver;

	public UserPreference(WebDriver driver) {
		this.driver=driver;
}
	@FindBy(how=How.CSS,using="#q1 .radio:nth-child(1) > label")
	@CacheLookup
		WebElement CusType;	
	
	@FindBy(how=How.CSS,using="#q2 .radio:nth-child(1) .qbe-action-radio")
	@CacheLookup
		WebElement Dur;	

	@FindBy(how=How.CSS,using="#q3 .radio:nth-child(2) .qbe-action-radio")
	@CacheLookup
		WebElement TaxCredit;

	@FindBy(how=How.CSS,using="#dob")
	@CacheLookup
		WebElement DOB;
	
	
	@FindBy(how=How.CSS,using="#q5 .radio:nth-child(2) .qbe-action-radio")
	@CacheLookup
		WebElement UnderAge;
	
	@FindBy(how=How.CSS,using="#button_forward")
	@CacheLookup
		WebElement Continue;
	
	public void RadioInputs(String date) throws InterruptedException {
		 Thread.sleep(3000);
		 CusType.click();
		 Thread.sleep(3000);
		 Dur.click();
		 Thread.sleep(3000);
		 TaxCredit.click();
		 Thread.sleep(3000);
		 DOB.sendKeys(date);
		 Thread.sleep(3000);
		 UnderAge.click();
		 Thread.sleep(3000);
		 Continue.click();
		 Thread.sleep(3000); 
	}
}
