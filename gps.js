describe("To check GPS page", function(){
	browser.ignoreSynchronization = true;

	var userName = element(by.xpath("//input[@id='txtName']"));
	var password = element(by.xpath("//*[@id='txtPassword']"));
	var logIn = element(by.buttonText("Login"));
	var messages = element(by.xpath("//*[@id='ucGPSMenu_hlnkMessage']")); 
	var searchBar = element(by.xpath("//input[@class='input-medium search-query']"));	
	var searchButton = element(by.xpath("//a[@class='btn']"));
	var subject = element.all(by.xpath("//table[@id='ctl00_cphBody_gvMessageList']//td[1]"));

	browser.get("http://www.ourgoalplan.com/Login.aspx");
	it("Should log-in",function(){

		//Enters user-name
		userName.sendKeys("saumyal");

		//Enters password
		password.sendKeys("M@n(he$ter");

		//Click log-in button
		logIn.click();

		//Open messages
		messages.click();

		//Search Messages by Ansuman Sahu
		searchBar.sendKeys("Ansuman Sahu");
		searchButton.click();

		//Prints the subject of all the messages from Ansuman Sahu
		subject.getText().then(function(text){
			console.log(text);
		});
	});
});
