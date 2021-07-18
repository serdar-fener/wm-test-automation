const { expect } = require('chai');

const UserDataHelper = require('../utils/user.data');

const MainPage = require('../pages/main.page');
const LoginPage = require('../pages/login.page');
const SignupPage = require('../pages/signup.page');
const MyAccountPage = require('../pages/my-account.page');

describe('SignUp', () => {
    it('should not be able to start signup with invalid email', () => {
        MainPage.goToLoginPage(); // go to login page..
        LoginPage.startSignUp('asdasda'); // start signup with invalid email..
        expect(LoginPage.divAlertText.getText()).to.equal('Invalid email address.'); // check error message is given..
    });

    it('should be able to signup with valid information', () => {
        MainPage.goToLoginPage(); // go to login page..

        const userInfo = UserDataHelper.getNewUserData(); // get new user data..
        LoginPage.startSignUp(userInfo.email); // start signup process..
        SignupPage.signup(userInfo); // finish signup
        MyAccountPage.pInfo.waitForDisplayed(); // check user is navigated to my-account page..
    });
});
