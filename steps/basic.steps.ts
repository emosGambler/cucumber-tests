import { browser } from "protractor";
import { Before, Given } from "cucumber";

Before(() => {
    browser.ignoreSynchronization = true;
    console.log("XXD")
});

Given(/^user logins to account$/, async () => {
    await console.log("WUBBA UBBA DUB DUB");
});
