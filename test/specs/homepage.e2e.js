import { expect, assert, should } from 'chai'
import { browser } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'
should ()

describe('Automation Test Store', () => {

    beforeEach(async () => {
        await HomePage.open()
    })

    it('should redirect to Automation Test Store and verify the search placeholder', async () => {
        const getBrowser = await browser.getUrl()
        const placeholder = await HomePage.searchInput.getAttribute('placeholder')

        expect(getBrowser).to.equal('https://automationteststore.com/')
        expect(placeholder).to.equal('Search Keywords')
    })

    it('should verify that Men navigation exists', async () => {
        const menExists = await HomePage.category.isExisting()
        assert.isTrue(menExists, 'Men should exist')
    })

    it('should verify that Latest Products is visible', async () => {
         const latestProductsVisible = await HomePage.latestProducts.isDisplayed()
        latestProductsVisible.should.be.true
     })

})