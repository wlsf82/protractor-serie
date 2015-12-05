describe ('AngularJS', function () {
  it ('should have a logo', function () {
    browser.get('/');
    expect($('.AngularJS-large').isDisplayed()).toBeTruthy();
    browser.pause();
  });
});
