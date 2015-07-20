'use strict';

/**
 * @ngdoc overview
 * @name reCodeMeApp
 * @description
 * # reCodeMeApp
 *
 * Main module of the application.
 */
angular
  .module('reCodeMeApp', [
    'ngAnimate',
    'ngCookies',
    'ngMaterial',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.ace'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/crear', {
        templateUrl: 'views/crear.html',
        controller: 'CrearCtrl',
        controllerAs: 'crear'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
