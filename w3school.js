describe("To get the first line from web-page",function(){
	browser.ignoreSynchronization = true;
	
	var firstLine = element(by.xpath('html/body/h1'));
	
	browser.get("http://www.w3schools.com/html/tryit.asp?filename=tryhtml_default");
	it("Should get the first line",function(){
		
		//Switch to i-frame
		browser.switchTo().frame("iframeResult");
				
		//Prints the first line
		firstLine.getText().then(function(text){
			console.log(text);
		});
		
		//Switches the driver back to top window
		browser.driver.switchTo().defaultContent();
	});
});
