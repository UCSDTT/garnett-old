'use strict';

// Declare app level module which depends on filters, and services

angular.module('garnett', [
  'ngRoute',
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/timeline', {
      templateUrl: 'partials/timeline',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    when('/new', {
      templateUrl: 'partials/newEvent',
      controller: 'EventsCtrl'
    }).
    when('/events/:eventId', {
      templateUrl: 'partials/eventPage',
      controller: 'EventPageCtrl'
    }).
    otherwise({
      redirectTo: '/404'
    });

    $locationProvider.html5Mode(true);
});