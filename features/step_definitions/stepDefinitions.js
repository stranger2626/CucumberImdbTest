var ImdbBasic = require('./Imdb.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

var steps = function() {

    this.setDefaultTimeout(60000);
    browser.ignoreSynchronization = true;
    
    this.Given(/^I am on the main page$/, function () {
    	return ImdbBasic.getPage();
    });

    this.When(/^I will log in with my info$/, function() {
    	return ImdbBasic.login('stranger2626@gmail.com','RandomPassword');
    });

    this.Then(/^I will search for something$/, function() {
        return ImdbBasic.search('Star Wars: The Force Awakens','Titles');
    });
    this.Then(/^I will go to the movie page$/, function() {
       return ImdbBasic.goToMoviePage('Star Wars: The Force Awakens');
    });
    this.Then(/^I will see if the movie has a good rating$/, function(){
        return ImdbBasic.seeIfMovieHasAGoodRating();
    });
    this.Then(/^I will wait a bit$/, function() {
        return ImdbBasic.wait(10000);
    });   
    this.Then(/^I will go to my watchlist$/, function(){
        return ImdbBasic.goToWatchlist();
    });
    this.Then(/^I will go to top rated movies$/, function(){
        return ImdbBasic.goToTopRatedMovies();
    });
    this.Then(/^I will add some top rated movies to my watchlist$/, function(){
        return ImdbBasic.addMovieToWatchlist('Pulp Fiction');
    });
    this.Then(/^I will log out$/, function(){
        return ImdbBasic.logOut();
    });
};

module.exports = steps;