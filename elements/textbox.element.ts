import { promise } from "protractor";
import { BaseElement } from "./base-element.element";

export class Textbox extends BaseElement {
    constructor(cssSelector: string) {
        super(cssSelector);
    }
    
    public sendKeys(keys: string): promise.Promise<void> {
        return this.element.sendKeys(keys);
    }
}
