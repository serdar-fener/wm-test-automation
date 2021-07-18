const { expect } = require('chai');

const UserDataHelper = require('../utils/user.data');

const MainPage = require('../pages/main.page');
const LoginPage = require('../pages/login.page');
const SignupPage = require('../pages/signup.page');
const MyAccountPage = require('../pages/my-account.page');

describe('SignIn', () => {
    it('should be able to navigate to login from main page', () => {
        MainPage.goToLoginPage();
        LoginPage.inputEmail.waitForDisplayed();
    });

    it('should not be able to login with invalid credentials', () => {
        MainPage.goToLoginPage();
        LoginPage.login(UserDataHelper.generateEmail(), 'dskjfnljsdnflksdnf');
        expect(LoginPage.divAlertText.getText()).to.equal('Authentication failed.');
    });

    it('should be able to login with valid credentials', () => {
        MainPage.goToLoginPage(); // go to login page..

        const userInfo = UserDataHelper.getNewUserData(); // get new user data..
        LoginPage.startSignUp(userInfo.email); // start signup process..
        SignupPage.signup(userInfo); // finish signup

        MyAccountPage.logout(); // logout user..

        LoginPage.login(userInfo.email, userInfo.password); // login with user..
        MyAccountPage.pInfo.waitForDisplayed(); // check my account is displayed..
        MyAccountPage.linkLogout.waitForDisplayed(); // check logout link is displayed..
    });
});


