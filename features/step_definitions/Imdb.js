//var chai = require('chai');
//var chaiAsPromised = require('chai-as-promised');
ImdbBasic = {
	getPage: function() {
		return browser.get('http://imdb.com');
	},
	login: function(login,password){
		var EC=protractor.ExpectedConditions;
		return browser.get('http://imdb.com/')
			.then(element(by.id('nblogin')).click)
			.then(function(){
				return browser.wait(EC.visibilityOf($('.fixed')),15000);
			})
			.then(element(by.xpath('/html/body/div[1]/div/div[2]/div/div[1]/div/div/a[4]/span[2]')).click)
			.then(function(){
				return browser.wait(EC.visibilityOf($('.a-spacing-small')),15000);
			})
			.then(function(){
				return element(by.id('ap_email')).sendKeys(login);
			})
			.then(function(){
				return element(by.id('ap_password')).sendKeys(password);
			})
			.then(browser.actions().sendKeys(protractor.Key.ENTER).perform());
	},
	search: function(searchText,category) {
		return element(by.id('navbar-query')).sendKeys(searchText)
		.then(function(){
			return element(by.cssContainingText('option',category)).click()
		})
		.then(function(){
			return element(by.id('navbar-submit-button')).click()
		})
		},
	wait: function(timeout) {
		return browser.sleep(timeout);
	},
	searchResultList: function(){
		var SearchList=element.all(by.partialLinkText('title'));
		return SearchList;
		},
		goToMoviePage: function(MovieName){
		return element(by.linkText(MovieName)).click();
	},
	seeIfMovieHasAGoodRating: function(){
		var EC=protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf($('#star-rating-widget')),5000);
		var getTheNumber=function(){
			element(by.xpath('/html/body/div[1]/div/div[4]/div[5]/div[1]/div/div/div[2]/div[2]/div/div[1]/div[1]/div[1]/strong/span')).getText()
			.then(function(textvalue){
				return expect(parseInt(textvalue)).to.be.above(5);
			})
		;}
		return getTheNumber();
	}
	};
module.exports = ImdbBasic;