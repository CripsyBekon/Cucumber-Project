package com.RetrievePaths;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

public class GetQuote {
	WebDriver driver;
	
	public GetQuote(WebDriver driver ) {
		this.driver=driver;
	}
	@FindBy(how=How.XPATH, using="//button[@id='button_get-quote']")
	@CacheLookup
		WebElement Quote;
	@FindBy(how=How.CSS, using=".radio:nth-child(3) .qbe-action-radio")
	@CacheLookup
		WebElement Anon;
	@FindBy(how=How.CSS, using="#form-3 > #rms_vehicle_origin_group #rms_vehicle_origin")
	@CacheLookup
		WebElement CarType;
	@FindBy(how=How.CSS, using="#form-3_start_date")
	@CacheLookup
		WebElement StartDate;
	@FindBy(how=How.CSS, using="#form-3_start_date")
	@CacheLookup
		WebElement FinishDate;
	@FindBy(how=How.CSS, using="#form-3 #btn_continue")
	@CacheLookup
		WebElement Continue;
	
	public void getQuote(String date) throws InterruptedException {
	
			Thread.sleep(3000);
			Quote.click();
			Thread.sleep(3000);
			Anon.click();
			Thread.sleep(3000);
			CarType.click();
			Thread.sleep(3000);
			Select current = new Select(CarType);
			current.getOptions().get(1).click();
			Thread.sleep(3000);
			StartDate.sendKeys(date);
			Thread.sleep(3000);	
			FinishDate.sendKeys(Keys.RETURN);
			Thread.sleep(3000);
			Continue.click();	
			Thread.sleep(5000);
	}
}
