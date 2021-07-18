const { baseUrl } = require('../config');
const Page = require('./page');

const selectors = {
    alert: 'div.alert.alert-danger',
    alertText: 'div.alert.alert-danger ol li',
    inputEmail: '#email',
    inputPassword: '#passwd',
    btnSignIn: '#SubmitLogin',
    inputEmailSignup: '#email_create',
    btnSignUp: '#SubmitCreate'
};

class LoginPage extends Page {
    get inputEmail () { return $(selectors.inputEmail) }
    get inputPassword () { return $(selectors.inputPassword) }
    get btnSignIn () { return $(selectors.btnSignIn) }
    get divAlert () { return $(selectors.alert) }
    get divAlertText () { return $(selectors.alertText) }
    get inputEmailSignup () { return $(selectors.inputEmailSignup) }
    get btnSignUp () { return $(selectors.btnSignUp) }

    login (email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.btnSignIn.click();
    }

    startSignUp(email) {
        this.inputEmailSignup.setValue(email);
        this.btnSignUp.click();
    }

    open() {
        super.open('index.php?controller=authentication&back=my-account');
    }
}

module.exports = new LoginPage();
