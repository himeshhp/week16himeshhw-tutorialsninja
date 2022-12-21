$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Account Login Page",
  "description": "As a user I want to Login to the tutorials ninja website",
  "id": "account-login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5427296701,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Verify user should navigate to Login Page successfully",
  "description": "",
  "id": "account-login-page;verify-user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on my Account link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select \"Login\" from my Account options",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I am navigated to the Login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 225666399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "AccountLoginSteps.iSelectFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 388519200,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginSteps.iAmNavigatedToTheLoginPageSuccessfully()"
});
formatter.result({
  "duration": 64979100,
  "status": "passed"
});
formatter.after({
  "duration": 686329800,
  "status": "passed"
});
formatter.uri("DesktopPage.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop Page Test",
  "description": "As As a user I want to be able to explore the different features and pages on the Desktop page",
  "id": "desktop-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3496568000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Verify that products arrange in an Alphabetical order when user selects sort by Name Z to A",
  "description": "",
  "id": "desktop-page-test;verify-that-products-arrange-in-an-alphabetical-order-when-user-selects-sort-by-name-z-to-a",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on Desktops tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select Show All Desktops from Drop down",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I am able to see that the products are arranged in Alphabetical oder when user selects sort by Name Z to A",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopsPageSteps.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 169594700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageSteps.iSelectShowAllDesktopsFromDropDown()"
});
formatter.result({
  "duration": 801824000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageSteps.iAmAbleToSeeThatTheProductsAreArrangedInAlphabeticalOderWhenUserSelectsSortByNameZToA()"
});
formatter.result({
  "duration": 9291761400,
  "error_message": "java.lang.AssertionError: Products not arranged in alphabetical order expected:\u003c[Apple Cinema 30\", Canon EOS 5D, HP LP3065, HTC Touch HD, iPhone, iPod Classic, MacBook, MacBook Air, Palm Treo Pro, Product 8, Samsung SyncMaster 941BW, Sony VAIO]\u003e but was:\u003c[Sony VAIO, Samsung SyncMaster 941BW, Product 8, Palm Treo Pro, MacBook Air, MacBook, iPod Classic, iPhone, HTC Touch HD, HP LP3065, Canon EOS 5D, Apple Cinema 30\"]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat com.tutorialsninja.cucumber.steps.DesktopsPageSteps.iAmAbleToSeeThatTheProductsAreArrangedInAlphabeticalOderWhenUserSelectsSortByNameZToA(DesktopsPageSteps.java:30)\r\n\tat ✽.Then I am able to see that the products are arranged in Alphabetical oder when user selects sort by Name Z to A(DesktopPage.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1059957300,
  "status": "passed"
});
formatter.uri("LaptopsAndNotebooksPage.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops And Notebooks Page",
  "description": "As a user I want to be able to explore the different features and pages on the Laptops And Notebooks Page",
  "id": "laptops-and-notebooks-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3531556801,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "Verify that products arrange from High to Low price order when user selects sort by Price (High \u003e Low)",
  "description": "",
  "id": "laptops-and-notebooks-page;verify-that-products-arrange-from-high-to-low-price-order-when-user-selects-sort-by-price-(high-\u003e-low)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover on Laptops and Notebooks tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Show All Laptops and Notebooks from Drop down",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am able to see that the products are arranged  from High to Low price order when user selects sort by Price (High \u003e Low)",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopsAndNotebooksPageSteps.iMouseHoverOnLaptopsAndNotebooksTabAndClick()"
});
formatter.result({
  "duration": 155941999,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksPageSteps.iSelectShowAllLaptopsAndNotebooksFromDropDown()"
});
formatter.result({
  "duration": 613851901,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksPageSteps.iAmAbleToSeeThatTheProductsAreArrangedFromHighToLowPriceOrderWhenUserSelectsSortByPriceHighLow()"
});
formatter.result({
  "duration": 739226701,
  "error_message": "java.lang.AssertionError: products not sorted by price expected:\u003c[122.0, 602.0, 1202.0, 2000.0, 1202.0]\u003e but was:\u003c[2000.0, 1202.0, 1202.0, 602.0, 122.0]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat com.tutorialsninja.cucumber.steps.LaptopsAndNotebooksPageSteps.iAmAbleToSeeThatTheProductsAreArrangedFromHighToLowPriceOrderWhenUserSelectsSortByPriceHighLow(LaptopsAndNotebooksPageSteps.java:29)\r\n\tat ✽.Then I am able to see that the products are arranged  from High to Low price order when user selects sort by Price (High \u003e Low)(LaptopsAndNotebooksPage.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1038246799,
  "status": "passed"
});
formatter.uri("RegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page Test",
  "description": "\r\nAs a user I am able to register on the tutorials ninja website",
  "id": "register-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3388951200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "Verify user should navigate to Register page successfully",
  "description": "",
  "id": "register-page-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on my Account link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select \"Register\" from my Account options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am navigated to the Register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 67689100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "AccountLoginSteps.iSelectFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 869652101,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iAmNavigatedToTheRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 46720201,
  "status": "passed"
});
formatter.after({
  "duration": 647722799,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu",
  "description": "As a user I want to explore the top menu tabs",
  "id": "top-menu",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3378503999,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Verify user should navigate to Desktops Page successfully",
  "description": "",
  "id": "top-menu;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on Desktops tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select Show All Desktops from Drop down",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I am navigated to the Desktops page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopsPageSteps.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 215965800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageSteps.iSelectShowAllDesktopsFromDropDown()"
});
formatter.result({
  "duration": 801116500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iAmNavigatedToTheDesktopsPageSuccessfully()"
});
formatter.result({
  "duration": 34976601,
  "status": "passed"
});
formatter.after({
  "duration": 631248800,
  "status": "passed"
});
});