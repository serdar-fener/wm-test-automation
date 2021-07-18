const Page = require('./page');

const selectors = {
    linkSignIn: 'a.login',
    linkContactUs: '#contact-link'
};

class MainPage extends Page {
    get linkSignIn() { return $(selectors.linkSignIn) };
    get linkContactUs() { return $(selectors.linkContactUs) };

    open() {
        super.open('/index.php');
    }

    goToLoginPage() {
        this.linkSignIn.click();
    }
}

module.exports = new MainPage();
