browser.ignoreSynchronization = true;

var helper = require('./helper');

describe ('Taller', function () {
  it ('should have the blog logo', function () {
    browser.get('http://blog.taller.net.br');
    helper.verifyElementPresenceById('blog-logo');
  });

  it ('should navigate to the first blog post', function () {
    var title = $('.tag-arquitetura-de-software .post-title'),
      image = $('.tag-arquitetura-de-software .featured-img'),
      titleInsidePost = $('#post-head .post-title'),
      mainContainer = $('#main');

    browser.get('http://blog.taller.net.br').then(function () {
      expect(title.isDisplayed()).toBeTruthy();
      expect(image.isDisplayed()).toBeTruthy();

      title.click();

      expect(titleInsidePost.isDisplayed()).toBeTruthy();
      expect(image.isPresent()).toBe(false);
      expect(mainContainer.getText()).toContain('Aqui está um experimento de pensamento.');
    });
  });

  it ('should have the website logo', function () {
    browser.get('http://taller.net.br');
    helper.verifyElementPresenceById('logo');
  });
});
