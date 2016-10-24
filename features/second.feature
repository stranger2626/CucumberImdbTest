Feature: Adding movies to watchlist
	As a user
	I can add movies to my watchlist

Scenario: Login at imdb.com and add some movies to my watchlist
	When I am on the main page
	When I log in with login 'stranger2626@gmail.com' and password 'RandomPassword'
	Then I go to my watchlist
	Then I go to top rated movies
	Then I add 'Pulp Fiction' to my watchlist
	Then I go to my watchlist
	Then I mark 'Pulp Fiction' as watched
	#Then I wait a bit