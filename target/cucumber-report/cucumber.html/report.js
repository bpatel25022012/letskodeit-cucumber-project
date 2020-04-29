$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/learn/letskodeit/resources/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "As a User I want to login into letskodeit website",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 19194680900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-functionality;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on letskodeit homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpTestSteps.iAmOnLetskodeitHomepage()"
});
formatter.result({
  "duration": 344070100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 15512562600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 132531900,
  "status": "passed"
});
formatter.after({
  "duration": 848579600,
  "status": "passed"
});
formatter.before({
  "duration": 14956158200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-functionality;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on letskodeit homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"xyz123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"Tiger0604\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpTestSteps.iAmOnLetskodeitHomepage()"
});
formatter.result({
  "duration": 57100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 211801400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "SignUpTestSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 6768770200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiger0604",
      "offset": 18
    }
  ],
  "location": "SignUpTestSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 372301800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 49400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 70900,
  "status": "passed"
});
formatter.after({
  "duration": 1811873700,
  "status": "passed"
});
formatter.uri("src/test/java/com/learn/letskodeit/resources/featurefile/signup.feature");
formatter.feature({
  "line": 2,
  "name": "signUp functionality",
  "description": "As a User I want to sign up into letskodeit website",
  "id": "signup-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SignUp"
    }
  ]
});
formatter.before({
  "duration": 18171551600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to sign up page successfully",
  "description": "",
  "id": "signup-functionality;user-should-navigate-to-sign-up-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on letskodeit homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on signup link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to signup page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpTestSteps.iAmOnLetskodeitHomepage()"
});
formatter.result({
  "duration": 53700,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTestSteps.iClickOnSignupLink()"
});
formatter.result({
  "duration": 323345800,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTestSteps.iShouldNavigateToSignupPageSuccessfully()"
});
formatter.result({
  "duration": 4802366700,
  "status": "passed"
});
formatter.after({
  "duration": 859617600,
  "status": "passed"
});
formatter.before({
  "duration": 17997319700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should signup successfully with valid credentials",
  "description": "",
  "id": "signup-functionality;user-should-signup-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on letskodeit homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on signup link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter fullname \"Bhavesh Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"xyz123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"Tiger0604\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter conform password \"Tiger0604\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Privacy policy button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on signup button",
  "keyword": "And "
});
formatter.match({
  "location": "SignUpTestSteps.iAmOnLetskodeitHomepage()"
});
formatter.result({
  "duration": 55400,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTestSteps.iClickOnSignupLink()"
});
formatter.result({
  "duration": 16124661200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bhavesh Patel",
      "offset": 18
    }
  ],
  "location": "SignUpTestSteps.iEnterFullname(String)"
});
formatter.result({
  "duration": 381722100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "SignUpTestSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 519666500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiger0604",
      "offset": 18
    }
  ],
  "location": "SignUpTestSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 282221900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiger0604",
      "offset": 26
    }
  ],
  "location": "SignUpTestSteps.iEnterConformPassword(String)"
});
formatter.result({
  "duration": 336981400,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTestSteps.iClickOnPrivacyPolicyButton()"
});
formatter.result({
  "duration": 310379600,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTestSteps.iClickOnSignupButton()"
});
formatter.result({
  "duration": 7026677100,
  "status": "passed"
});
formatter.after({
  "duration": 2366957400,
  "status": "passed"
});
});