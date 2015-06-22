;(function () {

  'use strict';

  app.Collections.Students = Backbone.Collection.extend({

    model: app.Models.Student,

    url: app.rootURL + 'classes/student',

    parse: function(response) {
      return response.results;
    }

  })

}());
