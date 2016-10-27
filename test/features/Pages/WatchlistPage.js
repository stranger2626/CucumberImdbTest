var ImdbBasic = require('./Imdb.js');
WatchlistPage={
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
	MarkAsWatched:function(ItemName){
	var xpathString="//a[contains(text(),'";
		xpathString=xpathString+ItemName+"')]"+"/../../../div[1]/div";
		return browser.findElement(by.xpath(xpathString)).click();
	}
};
Object.assign(WatchlistPage,ImdbBasic);
module.exports=WatchlistPage;