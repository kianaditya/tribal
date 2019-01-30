Feature: User can sign up

    As a Visitor
    In order to use the site functionality
    I want sign up and log in

    Background: 
        Given the following user exists
        |email          | password | password_confirmation |
        |real@email.com | password | password              |
        And I visit the site
        And I click 'Sign up'

    Scenario: When I fill in the sign up form correctly, I can sign up
        When I fill in 'Email' field with 'realuser@mail.com'
        And I fill in 'Password' field with 'password'
        And I fill in 'Password confirmation' field with 'password'
        And I fill in 'First name' field with 'Real'
        And I fill in 'Last name' field with 'User'
        And I click 'Submit'
        Then I should see 'Hello, realuser@mail.com'