Feature: Log in and search at imdb.com 
    As a user
    I can log in at imdb.com
    I can search

Scenario: Login at imdb.com and search for something
    Given I am on the main page
    When I log in with login 'stranger2626@gmail.com' and password 'RandomPassword'
    Then I search for 'Star Wars The Force Awakens' in the 'Titles' category
    Then I go to 'Star Wars: The Force Awakens' page
    Then I see if the movie has a better rating than '5'
    Then I see if the movie has a better tahan '60' Metascore
    Then I wait a bit