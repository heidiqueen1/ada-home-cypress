Feature: Ada Programs Page

  Scenario: Ada Programs Page is loaded
    Given I navigate to Programs section
    When The programs section is loaded

  Scenario Outline: Ada Programs Page shows available programs
    Then I see the program with title "<Title>" 
    Examples: 
      | Title                | 
      | React                |    
      | JavaScript Front End | 
      | Android Kotlin       | 