var Homepage = function() {
	this.get = function() {
		browser.driver.get('http://computer-database.herokuapp.com/computers');
	};
	this.heading = element(by.id('main')).element(by.css('h1'));	
	this.notificationMessage = element(by.css('.alert-message'));	
	this.filterInput = element(by.id('searchbox'));
	this.filterButton = element(by.id('searchsubmit'));
};

var UpdateComputerPage = function() { 
	this.heading = element(by.id('main')).element(by.css('h1'));	
	this.computerNameInput = element(by.id('name'));
	this.computerNameError = element(by.css('.clearfix.error'));	
	this.saveComputerButton = element(by.css('.primary'));
	this.cancelButton = element.all(by.css('.btn')).last();
	this.deleteButton = element.all(by.css('.btn.danger')).last();
};

describe('Computers database homepage', function() {
	beforeEach(function() {
		// We aren't running Angular so do not want to wait for Angular promises!
		return browser.ignoreSynchronization = true;
	});

	it('should be able to view a computer', function() {
		var homepage = new Homepage();
		homepage.get();
		homepage.filterInput.sendKeys('TestComputer');
		homepage.filterButton.click();
		element(by.linkText('TestComputer')).click();
		
		var updateComputerPage = new UpdateComputerPage();
		
		expect(updateComputerPage.heading.getText()).toBe('Edit computer');	
	});
	
	it('should be able to update a computer name', function() {
		var homepage = new Homepage();
		homepage.get();
		homepage.filterInput.sendKeys('TestComputer');
		homepage.filterButton.click();
		element(by.linkText('TestComputer')).click();
		
		var updateComputerPage = new UpdateComputerPage();
		updateComputerPage.computerNameInput.sendKeys('123');
		updateComputerPage.saveComputerButton.click();
		
		expect(homepage.notificationMessage.getText()).toBe('Done! Computer TestComputer123 has been updated');	
	});
	
	it('should display error when update a computer and not providing a computer name', function() {
		var homepage = new Homepage();
		homepage.get();
		homepage.filterInput.sendKeys('TestComputer');
		homepage.filterButton.click();
		element(by.linkText('TestComputer')).click();
		
		var updateComputerPage = new UpdateComputerPage();
		updateComputerPage.computerNameInput.clear();
		updateComputerPage.saveComputerButton.click();
		
		expect(updateComputerPage.computerNameError.getText()).toBe('Computer name\nRequired');	
	});
	
	it('should return to Home page when Cancel button clicked whilst updating a computer', function() {
		var homepage = new Homepage();
		homepage.get();
		homepage.filterInput.sendKeys('TestComputer');
		homepage.filterButton.click();
		element(by.linkText('TestComputer')).click();
		
		var updateComputerPage = new UpdateComputerPage();
		updateComputerPage.cancelButton.click();
		
		expect(homepage.heading.getText()).toContain(' computers found');	
	});
	
	it('should return to Home page when Delete button clicked whilst viewing a computer', function() {
		var homepage = new Homepage();
		homepage.get();
		homepage.filterInput.sendKeys('TestComputer');
		homepage.filterButton.click();
		element(by.linkText('TestComputer')).click();
		
		var updateComputerPage = new UpdateComputerPage();
		updateComputerPage.deleteButton.click();
		
		expect(homepage.notificationMessage.getText()).toBe('Done! Computer has been deleted');	
	});
});