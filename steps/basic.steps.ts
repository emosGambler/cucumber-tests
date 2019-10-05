import { Before, Given } from "cucumber";
import { LoginPage } from "./../pages/login.page";

Given(/^user logins to account$/, () => {
    return new LoginPage().login();
});
