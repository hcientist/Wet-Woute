'use strict';

/**
 * @ngdoc function
 * @name wetWouteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wetWouteApp
 */
angular.module('wetWouteApp')
  .controller('MainCtrl', function ($scope) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    $scope.origin = '';
    $scope.destination = '';
    $scope.departureTime = new Date();
    $scope.datePicker = {
      departureDate: new Date(),
      status: {
        opened: false,
      },
      format: 'dd-MMMM-yyyy', //'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'
      minDate: new Date(),
      maxDate: moment().add(10, 'years'),
      dateOptions: {
        formatYear: 'yy',
        startingDay: 1,
      },
    };

    $scope.open = function (evt) {
      console.log('open the thing');
      $scope.datePicker.status.opened = true;
    };

    $scope.routeIt = function () {
      // according to https://github.com/angular-ui/angular-google-maps/issues/578 
      // if we want to use that package, which otherwise looks very good, we
      // would need to do directions completely separately

      // we will need to comehow proxy google maps directions api stuuf, 
      // perhaps using an npm package?
    };
  });
