package com.RetrievePaths;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CountLinks {
	WebDriver driver;

	public CountLinks(WebDriver driver) {
		this.driver=driver;
	}


	public void CountLinkTest() {
		
	     List<WebElement> countTag = driver.findElements(By.tagName("li"));

	     int links = 1;
	     
	     for (int i = 1; i<countTag.size(); i=i+1)      
	     {      
	         if(countTag.get(i).getText().isEmpty()) {

	         }
	         else
	         {
	            links++;               
	         }       
	     }    
	     System.out.println("Total amount of menu links are: " + links);        
	    }
}
