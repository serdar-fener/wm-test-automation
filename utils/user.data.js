const faker = require('faker');

const availableTitles = ['Mr.', 'Mrs.']

// Helper class to handle user data..
class UserDataHelper {
    generateEmail() {
        const email = `testUserEmail${new Date()
            .toISOString()
            .replace(/[^0-9]/g, '')}-${Math.floor(
                Math.random() * 999999,
            )}@serdarfener.com`;
        return email.toLowerCase();
    }

    getNewUserData() {
        const birthDate = faker.date.past(18); // faker.date.between('1960-01-01', '2000-01-01'); // at least 18 years old..
        return {
            title: availableTitles[Math.round(Math.random())], // get random title from available list..
            email: this.generateEmail(), // random email..
            firstName: faker.name.firstName(), // random first name..
            lastName: faker.name.lastName(), // random last name..
            password: faker.internet.password(), // random password..
            addressLine1: faker.address.streetAddress(), // random address
            city: faker.address.city(), // random city
            state: faker.address.state(), // random state 
            postalCode: 72495, // random postal code
            country: 'United States',
            mobilePhone: '(555) 555-1234', // random mobile phone
            addressAlias: faker.random.word(), // random address line
            birthDate,
            birthDay: 1,
            birthMonth: 1,
            birthYear: 1990
        }
    }
}

module.exports = new UserDataHelper();

