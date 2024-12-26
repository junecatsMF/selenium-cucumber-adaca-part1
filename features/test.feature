Feature: Part 1: Selenium WebDriver Test Suite

  Scenario: User login
    Given I am logged in
    Then I should be in the dashboard
    Then I logout

  Scenario: Adding an item to the list
    Given I am logged in
    Then I should be in the dashboard
    When I add a "Buy cat food" to-do item
    Then the "Buy cat food" item should appear in the to-do list
    Then I logout

  Scenario: Deleting an item from the list
    Given I am logged in
    Then I should be in the dashboard
    When I delete the item
    Then I logout