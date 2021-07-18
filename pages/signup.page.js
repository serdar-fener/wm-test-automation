const Page = require('./page');

const selectors = {
    inputFirstName: '#customer_firstname',
    inputLastName: '#customer_lastname',
    inputEmail: '#email',
    inputPassword: '#passwd',
    selectBirthDay: '#days',
    selectBirthMonth: '#months',
    selectBirthYear: '#years',
    inputAddFirstName: '#firstname',
    inputAddLastName: '#lastname',
    inputAddLine1: '#address1',
    inputAddCity: '#city',
    selectAddState: '#id_state',
    inputAddZipcode: '#postcode',
    selectAddCountry: '#id_country',
    inputAddPhone: '#phone_mobile',
    inputAddAlias: '#alias',
    btnSubmit: '#submitAccount'
};

class LoginPage extends Page {
    get inputFirstName () { return $(selectors.inputFirstName) }
    get inputLastName () { return $(selectors.inputLastName) }
    get inputEmail () { return $(selectors.inputEmail) }
    get inputPassword () { return $(selectors.inputPassword) }
    get selectBirthDay () { return $(selectors.selectBirthDay) }
    get selectBirthMonth () { return $(selectors.selectBirthMonth) }
    get selectBirthYear () { return $(selectors.selectBirthYear) }
    get inputAddFirstName () { return $(selectors.inputAddFirstName) }
    get inputAddLastName () { return $(selectors.inputAddLastName) }
    get inputAddLine1 () { return $(selectors.inputAddLine1) }
    get inputAddCity () { return $(selectors.inputAddCity) }
    get selectAddState () { return $(selectors.selectAddState) }
    get inputAddZipcode () { return $(selectors.inputAddZipcode) }
    get selectAddCountry () { return $(selectors.selectAddCountry) }
    get inputAddPhone () { return $(selectors.inputAddPhone) }
    get inputAddAlias () { return $(selectors.inputAddAlias) }
    get btnSubmit () { return $(selectors.btnSubmit) }

    selectTitle(title) {
        $(`label=${title}`).click();
    }

    signup (userInfo) {
        this.selectTitle(userInfo.title);
        this.inputFirstName.setValue(userInfo.firstName);
        this.inputLastName.setValue(userInfo.lastName);
        this.inputEmail.setValue(userInfo.email);
        this.inputPassword.setValue(userInfo.password);
        this.selectBirthDay.selectByAttribute('value', userInfo.birthDay);
        this.selectBirthMonth.selectByAttribute('value', userInfo.birthMonth);
        this.selectBirthYear.selectByAttribute('value', userInfo.birthYear);
        this.inputAddFirstName.setValue(userInfo.firstName);
        this.inputAddLastName.setValue(userInfo.lastName);
        this.inputAddLine1.setValue(userInfo.addressLine1);
        this.inputAddCity.setValue(userInfo.city);
        this.selectAddState.selectByVisibleText(userInfo.state);
        this.inputAddZipcode.setValue(userInfo.postalCode);
        this.inputAddPhone.setValue(userInfo.mobilePhone);
        this.inputAddAlias.setValue(userInfo.addressAlias);
        this.btnSubmit.click();
        
    }
}

module.exports = new LoginPage();