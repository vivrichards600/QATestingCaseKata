var Homepage = function() {
	this.get = function() {
		browser.driver.get('http://computer-database.herokuapp.com/computers');
	};
	this.heading = element(by.id('main')).element(by.css('h1'));	
	this.notificationMessage = element(by.css('.alert-message'));	
	this.filterInput = element(by.id('searchbox'));
	this.filterButton = element(by.id('searchsubmit'));
};

var AddComputerPage = function() { 
	this.heading = element(by.id('main')).element(by.css('h1'));	
	this.computerNameInput = element(by.id('name'));
	this.computerNameError = element(by.css('.clearfix.error'));	
	this.saveComputerButton = element(by.css('.primary'));
	this.cancelButton = element.all(by.css('.btn')).last();
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
		
		var addComputerPage = new AddComputerPage();
		
		expect(addComputerPage.heading.getText()).toBe('Edit computer');	
	});
	
	it('should be able to update a computer name', function() {
		var homepage = new Homepage();
		homepage.get();
		homepage.filterInput.sendKeys('TestComputer');
		homepage.filterButton.click();
		element(by.linkText('TestComputer')).click();
		
		var addComputerPage = new AddComputerPage();
		addComputerPage.computerNameInput.sendKeys('123');
		addComputerPage.saveComputerButton.click();
		
		expect(homepage.notificationMessage.getText()).toBe('Done! Computer TestComputer123 has been updated');	
	});
	
	it('should display error when update a computer and not providing a computer name', function() {
		var homepage = new Homepage();
		homepage.get();
		homepage.filterInput.sendKeys('TestComputer');
		homepage.filterButton.click();
		element(by.linkText('TestComputer')).click();
		
		var addComputerPage = new AddComputerPage();
		addComputerPage.computerNameInput.clear();
		addComputerPage.saveComputerButton.click();
		
		expect(addComputerPage.computerNameError.getText()).toBe('Computer name\nRequired');	
	});
	
	it('should return to Home page when Cancel button clicked whilst updating a computer', function() {
		var homepage = new Homepage();
		homepage.get();
		homepage.filterInput.sendKeys('TestComputer');
		homepage.filterButton.click();
		element(by.linkText('TestComputer')).click();
		
		var addComputerPage = new AddComputerPage();
		addComputerPage.cancelButton.click();
		
		expect(homepage.heading.getText()).toContain(' computers found');	
	});
});