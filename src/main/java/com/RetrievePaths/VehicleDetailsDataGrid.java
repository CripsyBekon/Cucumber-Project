package com.RetrievePaths;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;



public class VehicleDetailsDataGrid {
	WebDriver driver;

	public VehicleDetailsDataGrid(WebDriver driver) {
		this.driver=driver;
	}
		
	@FindBy(how=How.CSS,using="#a1")
	@CacheLookup
		WebElement ManYear;	
	@FindBy(how=How.CSS,using="#a2")
	@CacheLookup
		WebElement VeBrand;
	@FindBy(how=How.CSS,using="#a3")
	@CacheLookup
		WebElement VeShape;
	@FindBy(how=How.CSS,using="#a4")
	@CacheLookup
		WebElement VeUsage;
	@FindBy(how=How.CSS,using="#a5")
	@CacheLookup
		WebElement postcode;
	@FindBy(how=How.CSS,using="#button_forward")
	@CacheLookup
		WebElement Continue;
	

	
	
	public void FillForm(String year,String Brand,String Shape, String Usage, String PostCode) throws InterruptedException {
		Thread.sleep(3000);
		ManYear.sendKeys(year);
		Thread.sleep(3000);
		VeBrand.click();
		Select VehicleBrand = new Select(VeBrand);
		VehicleBrand.selectByVisibleText(Brand);
		Thread.sleep(3000);
		Select  VehicleShape = new Select(VeShape);
		VehicleShape.selectByVisibleText(Shape);
		Thread.sleep(3000);
		Select  VehicleUsage = new Select(VeUsage);
		VehicleUsage.selectByVisibleText(Usage);;
		Thread.sleep(3000);
		Select PostCd = new Select(postcode);
		PostCd.selectByVisibleText(PostCode);
		Thread.sleep(3000);
		Continue.click();
		Thread.sleep(3000);
	
	}	
}
