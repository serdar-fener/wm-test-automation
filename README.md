# Test Automation Framework Example

Demonstration of Page Object Modelling using Webdriverio

## To Run Locally

Install node.js...

```
npm install

npm run test

```

## Config

Generic configs are stored within ./config.js file.. 
Webdriverio specific configs are stored within ./wdio.conf.js file..

Page object models are within ./pages folder.. 
Tests files are within ./tests..

## Reporting

Install allure on your machine 

```

brew install allure

```

After running tests, execute -> 

```

allure generate allure-results && allure open

```

