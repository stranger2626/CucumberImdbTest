	var ImdbBasic = require('./Imdb.js');
ItemPage={
	seeIfMovieHasAGoodRating:function(rating){
		var EC=protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf($('#star-rating-widget')),5000);
		browser.sleep(500);
		rating=parseInt(rating);
		var getTheNumber=function(){
			element(by.xpath("//*[@class='ratingValue']/strong/span")).getText()
			.then(function(textvalue){
				return expect(parseInt(textvalue)).to.be.above(rating);
			})
		;}
		return getTheNumber();
	},
	seeIfMovieHasGoodMetascore:function(rating){
		rating=parseInt(rating);
		var EC=protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf($('#star-rating-widget')),5000);
		var getTheNumber=function(){
			element(by.xpath("//*[@class='metacriticScore score_favorable titleReviewBarSubItem']/span")).getText()
			.then(function(textvalue){
				return expect(parseInt(textvalue)).to.be.above(rating);
				})
		;}
		return getTheNumber();
	}
};
Object.assign(ItemPage,ImdbBasic);

module.exports=ItemPage;