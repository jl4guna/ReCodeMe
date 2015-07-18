'use strict';

/**
 * @ngdoc function
 * @name reCodeMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reCodeMeApp
 */
angular.module('reCodeMeApp')
  .controller('MainCtrl', function ($scope, $mdDialog) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.alert = '';
    $scope.showConfirm = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .parent(angular.element(document.body))
        .title('¿Estas Seguro?')
        .content('Esta Accion elminara el item seleccionado')
        .ariaLabel('Borrar Item')
        .ok('Borrar')
        .cancel('Mejor no')
        .targetEvent(ev);
        $mdDialog.show(confirm).then(function() {
          console.log('Borrado');
        }, function() {
          console.log('No Borrado');
        });
    };

  });
