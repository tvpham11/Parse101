;(function () {

  'use strict';
  $.getJSON(app.rootURL + 'users/me').done(function(data) {
    console.log(data);
  });

}());
