'use strict';

angular.module('timeline.controller', []).
  controller('TimelineCtrl', function ($scope, $http) {
    $scope.events = [];

    $http.get('/api/events?since=now').
      success(function(data, status, headers, config) {
        console.log(data);
        data.forEach( function (item) {
          $scope.events.push(item);
        });
      }).
      error(function(data, status, headers, config) {
        console.log("error");
      });
  });

