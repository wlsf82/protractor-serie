var helper = require('./helper');

browser.ignoreSynchronization = true;

describe ('Other sites', function () {
  it ('should have the blog logo', function () {
    browser.get('/');
    helper.verifyElementPresenceById('wrapper .logo img');
  });

  it ('should navigate through the site pages by relative url', function () {
    var authour = $('.left-container .marked-title h3');

    browser.get('/tag/walmyr-filho');

    expect(authour.getText()).toContain('Walmyr Filho');
  });

  it ('should search', function () {
    var searchField = $('#s')
      , resultContainer = $('.left-container');

    browser.get('/').then(function () {
      searchField.sendKeys('Protractor');
      searchField.sendKeys(protractor.Key.ENTER);
    });

    expect(resultContainer.getText()).toContain('DICAS ÚTEIS COM PROTRACTOR');
    expect(resultContainer.getText()).toContain('INTERAGINDO COM ELEMENTOS DENTRO DE UM IFRAME COM PROTRACTOR');
    expect(resultContainer.getText()).toContain('UM POUCO MAIS DE PROTRACTOR');
  });
});
