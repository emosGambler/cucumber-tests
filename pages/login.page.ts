import { Page } from "./../models/page";
import { Textbox } from "./../elements/textbox.element";
import { Button } from "./../elements/button.element";
import { promise } from "protractor";
import { USERNAME, PASSWORD } from "./../support/data";

export class LoginPage extends Page {
    private usernameTextbox: Textbox;
    private passwordTextbox: Textbox;
    private submitButton: Button;

    constructor() {
        super();
        this.usernameTextbox = new Textbox("<selector>");
        this.passwordTextbox = new Textbox("<selector>");
        this.submitButton = new Button("<selector>");
    }

    public login(): promise.Promise<void> {
        this.usernameTextbox.sendKeys(USERNAME);
        this.passwordTextbox.sendKeys(PASSWORD);
        return this.submitButton.click();
    }
}