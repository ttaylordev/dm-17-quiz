(function() {
  'use strict';

  var quizApp = angular.module('quizApp', ['ui.router']);

  quizApp.angular.module('quizApp').config([
    '$compileProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function($compileProvider, $stateProvider, $urlRouterProvider) {
      // $compileProvider.debugInfoEnabled( false );

      $urlRouterProvider.otherwise('/home');

      var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: './dist/html/homeView.html',
        controller: 'homeCtrl'
      };

      var adminState = {
        name: 'admin',
        url: '/admin',
        templateUrl: './dist/html/admin.html',
        controller: 'adminCtrl'
      };

      $stateProvider.state(homeState).state(adminState);
    }
  ]);
})();
