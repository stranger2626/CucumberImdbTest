var ImdbBasic = require('./Imdb.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

var steps = function() {

    this.setDefaultTimeout(60000);
    browser.ignoreSynchronization = true;
    
    this.Given(/^I am on the main page$/, function () {
    	return ImdbBasic.getPage();
    });

    this.When(/^I log in with login '([^"]*)' and password '([^"]*)'$/, function(login,password) {
    	return ImdbBasic.login(login,password);
    });

    this.Then(/^I search for '([^"]*)' in the '([^"]*)' category$/, function(title,category) {
        return ImdbBasic.search(title,category);
    });
    this.Then(/^I go to '([^"]*)' page$/, function(MovieName) {
       return ImdbBasic.goToMoviePage(MovieName);
    });
    this.Then(/^I see if the movie has a better rating than '([^"]*)'$/, function(rating){
        return ImdbBasic.seeIfMovieHasAGoodRating(rating);
    });
    this.Then(/^I wait a bit$/, function() {
        return ImdbBasic.wait(10000);
    });   
    this.Then(/^I go to my watchlist$/, function(){
        return ImdbBasic.goToWatchlist();
    });
    this.Then(/^I go to top rated movies$/, function(){
        return ImdbBasic.goToTopRatedMovies();
    });
    this.Then(/^Then I add '([^"]*)' to my watchlist$/, function(ItemName){
        return ImdbBasic.addItemToWatchlist(ItemName);
    });
    this.Then(/^I log out$/, function(){
        return ImdbBasic.logOut();
    });
    this.Then(/^I see if the movie has a better tahan '([^"]*)' Metascore$/, function(rating){
        return ImdbBasic.seeIfMovieHasGoodMetascore(rating);
    })
};

module.exports = steps;