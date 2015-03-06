'use strict';

angular.module('newEvent.controller', ['uiGmapgoogle-maps', 'ngAutoComplete'])
    .config(function(uiGmapGoogleMapApiProvider){
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyAlYQPF3GwYeClh5-UJr0dzRarcsbLdhKY',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    })
    .controller('NewEventCtrl', function ($scope, $http, uiGmapGoogleMapApi) {
        $scope.result = '';
        $scope.options = null;
        $scope.details = '';
        
        $scope.map = {
            center: {latitude: 32.881, longitude: -117.238},
            zoom: 13
        };
        
        uiGmapGoogleMapApi.then(function(maps){
        });
    });