;(function () {

  'use strict';

  app.Collections.Users = Backbone.Collection.extend({

    model: app.Models.User,

    url: app.rootURL + 'users',

    parse: function(response) {
      return response.results;
    }

  });

}());
