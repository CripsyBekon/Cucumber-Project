package com.RetrievePaths;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class FinishQuote {
	
	WebDriver driver;

	public FinishQuote(WebDriver driver) {
		this.driver=driver;
	
}
	
	@FindBy(how=How.CSS,using=".glyphicon-chevron-right")
	@CacheLookup
		WebElement Finish;	
	
	
	public void QuoteValue() throws InterruptedException {
		WebElement Quote= driver.findElement(By.cssSelector("div.container:nth-child(6) div.qbe-content:nth-child(6) div.row div.col-sm-5 span.qbe-insert-offer-box div.panel.panel-default.panel-standout div.panel-body:nth-child(1) div.visible-md-block.visible-lg-block > span:nth-child(1)"));
		String TotalCost= Quote.getText();
		System.out.println(TotalCost+ "is the quote for 12 months");
		Thread.sleep(3000);
		
	}
	
	public void Finish() throws InterruptedException {
		
		Thread.sleep(3000);
		Finish.click();
		Thread.sleep(3000);
		
		 
	}

}
