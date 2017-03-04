var AddComputerPage = function() { 
	this.get = function() {
		browser.driver.get('http://computer-database.herokuapp.com/computers/new');
	};
	this.heading = element(by.id('main')).element(by.css('h1'));	
	this.computerNameInput = element(by.id('name'));
	this.computerNameError = element(by.css('.clearfix.error'));	
	this.createComputerButton = element(by.css('.primary'));
	this.cancelButton = element.all(by.css('.btn')).last();
};

var Homepage = function() {
	this.heading = element(by.id('main')).element(by.css('h1'));	
	this.notificationMessage = element(by.css('.alert-message'));	
};

describe('Add a computer page', function() {
	beforeEach(function() {
		// We aren't running Angular so do not want to wait for Angular promises!
		return browser.ignoreSynchronization = true;
	});
	
	it('should be displayed', function() {
		var addComputerPage = new AddComputerPage();
		addComputerPage.get();

		expect(addComputerPage.heading.getText()).toBe('Add a computer');	
	});
	
	it('should be able to add a new computer', function() {
		var addComputerPage = new AddComputerPage();
		addComputerPage.get();

		addComputerPage.computerNameInput.sendKeys('TestComputer');
		addComputerPage.createComputerButton.click();
					
		var homepage = new Homepage();
		
		expect(homepage.notificationMessage.getText()).toBe('Done! Computer TestComputer has been created');	
	});
	
	it('should display error message clicking Create this computer button and not providing a computer name', function() {
		var addComputerPage = new AddComputerPage();
		addComputerPage.get();

		addComputerPage.createComputerButton.click();
					
		expect(addComputerPage.computerNameError.getText()).toBe('Computer name\nRequired');	
	});
	
	it('should return to Home page when Cancel button clicked', function() {
		var addComputerPage = new AddComputerPage();
		addComputerPage.get();

		addComputerPage.cancelButton.click();
		
		var homepage = new Homepage();
		expect(homepage.heading.getText()).toContain(' computers found');	
	});
});