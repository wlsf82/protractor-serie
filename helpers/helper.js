// helper.js

module.exports = {
  verifyElementPresenceById : function(id) {
    var element = $('#' + id);
    expect(element.isDisplayed()).toBeTruthy();
  }
};
