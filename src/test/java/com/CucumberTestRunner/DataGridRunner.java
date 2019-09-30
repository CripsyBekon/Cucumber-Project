package com.CucumberTestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"pretty", "html:target/cucmber-html-report"}, 
		features ="src\\test\\java\\com\\DataGrid.feature", 
		glue= {"com.CucumberSteps"},
		tags = {"@DataGridTest"},
		dryRun= false,
		monochrome=true
		)

public class DataGridRunner {

}
