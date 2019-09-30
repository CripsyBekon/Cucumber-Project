package com.RetrievePaths;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePagePaths {
WebDriver driver;
		
		public HomePagePaths(WebDriver driver ) {
			this.driver=driver;
		}
		@FindBy(how=How.XPATH, using="//a[contains(text(),'Car & Vehicle')]")
		@CacheLookup
			WebElement CnV;
		@FindBy(how=How.CSS, using=".c-mega-menu__dropdown:nth-child(1) .list-group-item:nth-child(2) > .hyperlink")
		@CacheLookup
			WebElement CTP;
		@FindBy(how=How.CSS, using=".c-columnContent__content:nth-child(1) > .c-columnContent__buttonContent:nth-child(2) > .c-columnContent__hyperlink")
		@CacheLookup
			WebElement NSW;
		@FindBy(how=How.CSS, using="li:nth-child(2) .action-bar__text")
		@CacheLookup
			WebElement Renew;

		
		public void homePagePaths() throws InterruptedException {
				Thread.sleep(3000);
				CnV.click();
				Thread.sleep(3000);
				CTP.click();
				Thread.sleep(3000);
				NSW.click();
				Thread.sleep(3000);
				Renew.click();
				Thread.sleep(3000);

		}
		
		public void CompareTitleText() throws InterruptedException {
				Thread.sleep(3000);
				String getTitle = driver.getTitle();
				String text = "Compulsory Third Party NSW Green Slip Insurance";
				if(!getTitle.equals(text))
				{
					System.out.println("Test Passed for Title matching");
				}				
		}
		
		public void CheckIfTextExists() throws InterruptedException {
				Thread.sleep(3000);
				if(driver.getPageSource().contains("Compulsory Third Party NSW Green Slip Insurance")) {
					System.out.println("Text exists in page");
				}
				else {
					System.out.println("Text does not exist in page");
				}
			
		}
		
}
