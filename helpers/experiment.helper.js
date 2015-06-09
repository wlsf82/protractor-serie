// experiment.helper.js

module.exports = {
  // This method try to find a blog post and click on it, based on its title, as first argument.
  // A second needed argument is how many tentatives you want to try.
  findBlogPostAndClick : function( postTitle, numberOfTentatives ) {

    // Get element references.
    var nextPageButton = element(by.css('.older-posts'))
      , titleInsidePost = element(by.cssContainingText('#post-head .post-title', postTitle));

    // Loop based on informed tentatives
    for ( i = 0; i < numberOfTentatives; i++ ) {

      // Verify element presence and callback with the result, that can be true or false.
      element(by.cssContainingText('.post-title', postTitle)).isPresent().then(function ( result ) {

        // If the element is found on the current page, it is clicked,
        // a verification is done to see if the title is present inside the post,
        // and it logs that the post was found.
        if ( result ) {

          element(by.cssContainingText('.post-title', postTitle)).click().then(function () {

            expect(titleInsidePost.isDisplayed()).toBeTruthy();
            console.log('Achei!');

          });

          // If the blog post is not found on the current page
          // and it still has a tentative, it will check on the next page.
        } else {

          nextPageButton.click();

        }

      });

    }

  }

};
