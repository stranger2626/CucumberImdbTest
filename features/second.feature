Feature: Adding movies to watchlist
	As a user
	I can add movies to my watchlist

Scenario: Login at imdb.com and add some movies to my watchlist
	Given I am on the main page
	Then I will go to my watchlist
	Then I will go to top rated movies
	Then I will add some top rated movies to my watchlist
	Then I will log out
	Then I will wait a bit