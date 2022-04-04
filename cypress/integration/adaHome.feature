Feature: Ada Home Page

  Scenario: Ada Home Page main elements are loaded
    Given I open Ada Home Page
    Then I see Ada School icon
    And I see the page main Title 

  Scenario Outline: Ada Home Page loads social media icons
    Given I see the social media section
    Then I validate "<SocialMedia>" icon redirects to "<url>"
    Examples: 
      | SocialMedia | url                                                       |
      | Instagram   | https://www.instagram.com/ada_school_/                    |
      | Youtube     | https://www.youtube.com/channel/UCCh2yyNLcNQRxboKtMzvFqw  |
      | LinkedIn    | https://www.linkedin.com/company/adaschool/               |
      | Facebook    | https://www.facebook.com/AdaEducacion/                    |


