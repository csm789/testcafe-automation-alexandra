import HomePageObject from '../pageObjects/HomePageObject'

fixture `Home Page Tests`

    .page `http://automationpractice.com/index.php`;

const homePageObject = new HomePageObject();

test('Verify Search results count for an Item ', async t => {
    
    await t
        .typeText(homePageObject.inputSearchBox,'pink')
        .click(homePageObject.submitButton)
        .expect(homePageObject.textResultsFound.innerText).eql('1 result has been found.')
});