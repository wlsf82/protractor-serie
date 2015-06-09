var xHelper = require('./helpers/experiment.helper');

browser.ignoreSynchronization = true;

ddescribe ('This is a experiment', function () {

  it ('should find a blog post, independent from the page where the post is', function () {

    browser.get('http://blog.taller.net.br');

    // It try to find and click on the blog post based on its title for the provided number of times.
    xHelper.findBlogPostAndClick('Testando aplicações AngularJS com Protractor', 4);

  });

});
