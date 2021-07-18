const Page = require('./page');

const selectors = {
    pInfo: 'p.info-account',
    linkLogout: 'a.logout'
}

class MyAccountPage extends Page {
    get pInfo() { return $(selectors.pInfo) };
    get linkLogout() { return $(selectors.linkLogout) };

    logout() {
        this.linkLogout.click();
    }
}

module.exports = new MyAccountPage();
