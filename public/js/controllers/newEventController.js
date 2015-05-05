'use strict';

angular.module('newEvent.controller', ['uiGmapgoogle-maps', 'ngAutoComplete', 'ui.bootstrap'])
    .config(function(uiGmapGoogleMapApiProvider){
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyAlYQPF3GwYeClh5-UJr0dzRarcsbLdhKY',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    })
    .controller('NewEventCtrl', function($scope, $http, uiGmapGoogleMapApi){
        //Google Maps 
        $scope.result = 'UCSD, Gilman Drive, La Jolla, CA, United States';
        $scope.options = null;
        var lat = 32.881;
        var long = -117.238;
        
        $scope.map = {
            center: {latitude: lat, longitude: long},
            zoom: 13
        };
        
        uiGmapGoogleMapApi.then(function(maps){
        });

        //watch form for changes
        $scope.watchLocation = function () {
          return $scope.details;
        };
        $scope.$watch($scope.watchLocation, function () {
          $scope.changeMapLocation()
        }, true);
    
        //set options from form selections
        $scope.changeMapLocation = function() {
            lat = $scope.details.geometry.location.A;
            long = $scope.details.geometry.location.F;

            $scope.map = {
                center: {latitude: lat, longitude: long},
                zoom: 13
            }; 
                    
            uiGmapGoogleMapApi.then(function(maps){
            });
            
            $scope.marker.coords.latitude = lat;
            $scope.marker.coords.longitude = long;
        };
        
        
        $scope.marker = {
              id: 0,
              coords: {
                latitude: lat,
                longitude: long
              },
              options: { draggable: false },
            };
        
        
        //Bootstrap DatePicker
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();
        
        $scope.clear = function() {
            $scope.dt = null;
        };
        
        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            // return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            return false;
        };
        
        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        
        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
        
            $scope.opened = true;
        };
        
        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };
        
        // $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 2);
        $scope.events = [{
            date: tomorrow,
            status: 'full'
        }, {
            date: afterTomorrow,
            status: 'partially'
        }];
        
        $scope.getDayClass = function(date, mode) {
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
        
                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);
        
                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }
        
            return '';
        };
    });