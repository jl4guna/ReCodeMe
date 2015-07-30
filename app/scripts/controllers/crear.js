'use strict';

/**
 * @ngdoc function
 * @name reCodeMeApp.controller:CrearCtrl
 * @description
 * # CrearCtrl
 * Controller of the reCodeMeApp
 */
angular.module('reCodeMeApp')
  .controller('CrearCtrl', function ($scope) {
    $scope.nota = {
        title : '',
        description : ''
    };

    $scope.tags = [];

  });
