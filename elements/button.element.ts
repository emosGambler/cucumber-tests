import { promise } from "protractor";
import { BaseElement } from "./base-element.element";

export class Button extends BaseElement {
    constructor(cssSelector: string) {
        super(cssSelector);
    }
    
    public click(): promise.Promise<void> {
        return this.element.click();
    }
}
