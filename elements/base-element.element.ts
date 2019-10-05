import { $, ElementFinder } from "protractor";

export class BaseElement {
    public element: ElementFinder;

    constructor(cssSelector: string) {
        this.element = $(cssSelector);
    }
}