describe("Test on posse website",function(){
	var selection = [];
	var images = element.all(by.xpath("//img[@class='photo']"));
	var selectedButton = element(by.xpath("//button[4]"));
	var sydney = element(by.xpath("//*[contains(text(),'SYDNEY')]")); 
	var places = element.all(by.xpath("//*[text() >=100][text() <=200]/ancestor::div[3]/preceding-sibling::div[1]/child::div[1]"));
	var aRatings = element.all(by.xpath("//*[text() >=100][text() <=200]"));
	var selectedPlaces = element.all(by.xpath("//div[@class='placeName']"));

	browser.get("https://posse.com/",15000);
	it("Should meet the testing conditions",function(){
		//Selects Sydney
		sydney.click();

		//Allows the web-page to load
		browser.sleep(2000);

		//Selects places with ratings between 100 and 200 and print their names
		places.then(function(list){

			//Prints the number of places in the given range
			console.log("Total places are :"+list.length);
			console.log("=======================================================");

			//Prints the name of all places in the given range
			for(i=0 ; i < list.length ; i++){
				list[i].getText().then(function(ratings){
					console.log(ratings);
				});
			}
		});

		//Selects 4 places 
		images.then(function(img){
			for(j=0;j<4;j++){
				img[j].click();
			}	

			//Display only the selected places
			selectedButton.click();

		});

		//Gets only those which were places selected by earlier
		selectedPlaces.then(function(places){
			console.log("-------------------------------------------");
			console.log("Totoal number of places are :" +places.length);

			//Verifies that only places got selected
			expect(places.length).toBe(4);
		});
	});
});
//git jenkins promises
//for each command
//sourcetree