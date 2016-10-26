Feature: Adding movies to watchlist
	As a user
	I can add movies to my watchlist
	I can remove movies from my watchlist

Scenario Outline: Login at imdb.com and add some movies to my watchlist and remove them from watchlist
	When I am on the main page
	When I log in with login '<Login>' and password '<Password>'
	Then I go to my watchlist
	Then I go to top rated movies
	Then I add '<Movie>' to my watchlist
	Then I add '<SecondMovie>' to my watchlist
	Then I go to my watchlist
	Then I mark '<Movie>' as watched
	Then I mark '<SecondMovie>' as watched
	Then I logout

	 Examples:
            | Movie                        | SecondMovie			 | Login                   | Password      |
            | The Dark Knight			   | The Godfather           | stranger2626@gmail.com  | RandomPassword|
            | Pulp Fiction                 | Angry Men           	 | stranger262626@gmail.com| RandomPassword|