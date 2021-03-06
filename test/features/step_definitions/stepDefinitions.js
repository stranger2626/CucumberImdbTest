var ImdbBasic = require('../Pages/Imdb.js');
var ItemPage = require('../Pages/ItemPage.js');
var WatchlistPage=require('../Pages/WatchlistPage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

var steps = function() {

    this.setDefaultTimeout(60000);
    browser.ignoreSynchronization = true;
    
    this.When(/^I am on the main page$/, function () {
        return ImdbBasic.getPage().then(browser.sleep(500));
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
        browser.sleep(2000);
        return ItemPage.seeIfMovieHasAGoodRating(rating);
    });
    this.Then(/^I wait a bit$/, function() {
        return ImdbBasic.wait(1000);
    });   
    this.Then(/^I go to my watchlist$/, function(){
        return ImdbBasic.goToWatchlist();
    });
    this.Then(/^I go to top rated movies$/, function(){
        return WatchlistPage.goToTopRatedMovies();
    });
    this.Then(/^I add '([^"]*)' to my watchlist$/, function(ItemName){
        return WatchlistPage.addItemToWatchlist(ItemName);
    });
    this.Then(/^I logout$/, function(){
        return ImdbBasic.logOut();
    });
    this.Then(/^I see if the movie has a better tahan '([^"]*)' Metascore$/, function(rating){
        return ItemPage.seeIfMovieHasGoodMetascore(rating);
    });
    this.Then(/^I mark '([^"]*)' as watched$/, function(ItemName){
        return WatchlistPage.MarkAsWatched(ItemName);
    })
};

module.exports = steps;