'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {
    console.log("enter main controller");
  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here
    console.log("enter controller 1");
  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here
    console.log("enter controller 2");
  });