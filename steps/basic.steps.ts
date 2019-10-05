import { browser } from "protractor";
import { Before, Given } from "cucumber";

Before(() => {
    // browser.ignoreSynchronization = true;
});

Given(/^user logins to account$/, () => {
    console.log("WUBBA UBBA DUB DUB");
});
