Feature: Log in and search at imdb.com 
    As a user
    I can log in at imdb.com
    I can search
    @first
    Scenario Outline: Login at imdb.com and search for <Movie>
        When I am on the main page
        When I log in with login '<Login>' and password '<Password>'
        Then I search for '<Movie>' in the 'Titles' category
        Then I go to '<Movie>' page
        Then I see if the movie has a better rating than '<rating>'
        Then I see if the movie has a better tahan '<Meta>' Metascore
        Then I logout
    

                 Examples:
                        | Movie                        | rating | Meta | Login                   | Password       |
                        | Star Wars: The Force Awakens | 5      | 60   | stranger2626@gmail.com  | RandomPassword |
                        | Pulp Fiction                 | 4      | 87   | stranger262626@gmail.com| RandomPassword |