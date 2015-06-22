;(function () {

  'use strict';
  window.app = {};

  app.Models = {};
  app.Collections = {};

  // Parse Auth Tokens
  var sessionToken = '';
  if(Cookies.get('sessionToken') !== undefined) {
    sessionToken = Cookies.get('sessionToken');
  }

  $.ajaxSetup({

      headers: {
      'X-Parse-Application-Id': 'WytVE7RUz9fVgJVmcTTqpU2c3i7B0MIbhj61ZorQ',
      'X-Parse-REST-API-Key': 'MMUzc5vAUlCAI8ZtrxsbytzY75BjOPDZ8RiUZ3fx',
      'X-Parse-Session-Token': sessionToken
      }
  });

  // Root URL
  app.rootURL = 'https://api.parse.com/1/';

}());
