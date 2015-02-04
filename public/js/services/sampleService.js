'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  factory('EventData', ['$http', function($http) {
    return {
      get: function(eventId, callback) {
        $http.get('/api/events/' + eventId).success(function(eventData) {
          $http.get('/api/members/' + eventData[0].created_by).success(function(memberData) {
            var resultData = {};
            resultData.eventData = eventData;
            resultData.memberData = memberData;
            callback(resultData);
          });
        });
      }
    };
  }]);