var AddComputerPage = function() { 
	this.get = function() {
		browser.driver.get('http://computer-database.herokuapp.com/computers/new');
	};
	
	this.computerNameInput = element(by.id('name'));
	this.createComputerButton = element(by.css('.primary'));
};

describe('Add a computer page', function() {
	beforeEach(function() {
		// We aren't running Angular so do not want to wait for Angular promises!
		return browser.ignoreSynchronization = true;
	});
	
	it('should be displayed', function() {
		var addComputerPage = new AddComputerPage();
		addComputerPage.get();

		expect(element(by.id('main')).element(by.css('h1')).getText()).toBe('Add a computer');	
	});
	
	it('should be able to add a new computer', function() {
		var addComputerPage = new AddComputerPage();
		addComputerPage.get();

		addComputerPage.computerNameInput.sendKeys('TestComputer');
		addComputerPage.createComputerButton.click();
					
		expect(element(by.css('.alert-message')).getText()).toBe('Done! Computer TestComputer has been created');	
		        
		
	});
});