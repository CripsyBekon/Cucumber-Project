package com.RetrievePaths;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;



public class VehicleDetails {
	WebDriver driver;

	public VehicleDetails(WebDriver driver) {
		this.driver=driver;
	}
		
	@FindBy(how=How.CSS,using="#a1")
	@CacheLookup
		WebElement ManYear;	
	@FindBy(how=How.CSS,using="#a2")
	@CacheLookup
		WebElement Brand;
	@FindBy(how=How.CSS,using="#a3")
	@CacheLookup
		WebElement Shape;
	@FindBy(how=How.CSS,using="#a4")
	@CacheLookup
		WebElement Usage;
	@FindBy(how=How.CSS,using="#a5")
	@CacheLookup
		WebElement PostCode;
	@FindBy(how=How.CSS,using="#button_forward")
	@CacheLookup
		WebElement Continue;
	

	
	
	public void FillForm(String year) throws InterruptedException {
		Thread.sleep(3000);
		ManYear.sendKeys(year);
		Thread.sleep(3000);
		Brand.click();
		Select VehicleBrand = new Select(Brand);
		VehicleBrand.getOptions().get(3).click();
		Thread.sleep(3000);
		Select  VehicleShape = new Select(Shape);
		VehicleShape.getOptions().get(7).click();
		Thread.sleep(3000);
		Select  VehicleUsage = new Select(Usage);
		VehicleUsage.getOptions().get(1).click();
		Thread.sleep(3000);
		Select PostCd = new Select(PostCode);
		PostCd.getOptions().get(1).click();
		Thread.sleep(3000);
		Continue.click();
		Thread.sleep(3000);
	
	}	
}
