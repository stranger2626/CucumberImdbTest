Feature: Log in and search at imdb.com 
    As a user
    I can log in at imdb.com
    I can search

Scenario: Login at imdb.com and search for something
    Given I am on the main page
    When I will log in with my info
    Then I will search for something
    Then I will go to the movie page
    Then I will see if the movie has a good rating
    Then I will wait a bit