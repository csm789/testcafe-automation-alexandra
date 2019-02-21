import HomePageObject from '../pageObjects/HomePageObject'
import randomstring from 'randomstring'
import { Selector } from 'testcafe'


fixture `Home Page Tests`

    .page `http://automationpractice.com/index.php`;
    

const homePageObject = new HomePageObject();

test.skip('Verify Search results count for an Item ', async t => {
    
    await t
        .typeText(homePageObject.inputSearchBox,'pink')
        .click(homePageObject.submitButton)
        .expect(homePageObject.textResultsFound.innerText).eql('1 result has been found.')
});




test('Validate user registration process', async t => {

    const firstName = 'AutoTest ' + randomstring.generate(8)
    const titleSelect = Selector('#prefix')
    const titleOption = titleSelect.find('option')
    

    await t

    .click()
    .typeText()
    
    
});