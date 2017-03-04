var Homepage = function() {
  
  this.get = function() {
    browser.driver.get('http://computer-database.herokuapp.com/computers');
  };
};


describe('Computers database homepage', function() {

	beforeEach(function() {
		// We aren't running Angular so do not want to wait for Angular promises!
		return browser.ignoreSynchronization = true;
	});
	
	it('should be displayed', function() {
		var homepage = new Homepage();
		homepage.get();

		expect(browser.getTitle()).toEqual('Computers database');
	});

	it('should have a title', function() {
		var homepage = new Homepage();
		homepage.get();

		expect(element(by.css('.fill')).getText()).toBe('Play sample application — Computer database');
	});
	
});