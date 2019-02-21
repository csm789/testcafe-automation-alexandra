import { Selector } from 'testcafe'
import randomstring from 'randomstring'

fixture `DEV Tests`
    
        .page`https://www.alexandra.co.uk/`

    const firstName = 'AutoTest ' + randomstring.generate(8)
    const titleSelect = Selector('#prefix')
    const titleOption = titleSelect.find('option')
    
    // const citySelect = Selector('#city') 
    // await t.click(citySelect)
    // const cityOption = citySelect.find('option')
    // await t
        // .click(citySelect)
        // .click(cityOption.withText('London'))


    test('should allow to create a New Account at Alexandra', async t => {

        await t
        .click(Selector('a').withText ('CREATE ACCOUNT'))
        // .click(titleSelect)
        // .click(titleOption.withText('Miss'))
        .typeText(Selector('#firstname'),firstName)
        
        
    });