describe("Verify the product",function (){
	browser.get("http://demos.angularcode.com/product-manager/#/");

	var editButton = element(by.xpath("//button[@class='btn btn-default fa fa-edit']"));
	var popup = element(by.xpath("//h3[@class='modal-title ng-binding']"));
	var cancelButton = element(by.xpath("//a[@class='btn btn-sm']"));
	var deleteButton = element(by.xpath("//button[@class='btn btn-danger fa fa-trash-o']"));
	var productTable = element(by.xpath("//table[@class='table table-striped']"));
	var EC = protractor.ExpectedConditions;

	//Verify Page Title
	it("Verifying the given conditions",function(){

		expect(browser.getTitle()).toEqual('Product Manager Web Application');

		//Search For the Product
		element(by.model("filterProduct")).sendKeys("Baba Ramdev Patanjali Gulab Jal");

		//Clicks the edit button
		editButton.click();

		//Waits for the pop-up
		browser.sleep(2000);

		//Switch to pop-up window
		browser.driver.switchTo().activeElement();

		//Verifies that the pop-up is open
		expect(popup.getText()).toContain("product");

		//Click on cancel
		cancelButton.click();

		//Click on delete
		deleteButton.click();

		//Delete's the product
		browser.wait(EC.alertIsPresent(), 10000);
		browser.switchTo().alert().accept();

		//Verify that the product has been deleted
		element(by.model("filterProduct")).sendKeys("");
		expect(productTable).not.toContain('589');
	});

});