import { $ } from '@wdio/globals'
import Page from './page.js'

class HomePage extends Page {
    get searchInput () {
        return $('#filter_keyword')
    }
    get category () {
        return $('a=Men')
    }
    get latestProducts () {
        return $('span.maintext=Latest Products')
    }
}

export default new HomePage()