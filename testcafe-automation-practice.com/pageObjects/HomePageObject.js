import { Selector } from 'testcafe';

export default class HomePageObject {
    constructor () {

        this.inputSearchBox = Selector('#search_query_top');
        this.submitButton  = Selector('button.btn-default.button-search');
        this.textResultsFound = Selector('span.heading-counter');
    }
}
