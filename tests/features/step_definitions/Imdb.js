
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
			.then(element(by.xpath("//span[contains(text(),'Sign in with IMDb')]")).click)
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
	
	
	goToWatchlist: function(){
		return element(by.linkText('Watchlist')).click();
	},
	goToTopRatedMovies: function(){
		return element(by.linkText('Top Rated Movies')).click();
	},
	addItemToWatchlist: function(ItemName){
		var xpathString="//*[contains(text(),'";
			xpathString=xpathString+ItemName+"')]"+"/../../td[5]/div/div";
		
		var SomeElement = browser.findElement(by.xpath(xpathString));
		return browser.executeScript("arguments[0].click()",SomeElement);
		browser.sleep(1000);
	},
	logOut:function(){
		var EC=protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf($('#wrapper')),5000);
		return element(by.xpath("//*[@class='css_nav_menu js_nav_item']/span")).click()
		.then(function(){
			var SomeElement = element(by.id('nblogout'));
			return browser.executeScript("arguments[0].click()",SomeElement);
		});
	},
	MarkAsWatched:function(ItemName){
	var xpathString="//a[contains(text(),'";
		xpathString=xpathString+ItemName+"')]"+"/../../../div[1]/div";
		return browser.findElement(by.xpath(xpathString)).click();
	}
	};
module.exports = ImdbBasic;

