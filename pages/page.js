const config = require('../config');

module.exports = class Page {
    open (path) {
        return browser.url(`${config.baseUrl}/${path}`)
    }
}
