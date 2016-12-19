(function() {
  'use strict';

  var quizApp = angular.module('quizApp', ['ui.router']);

  quizApp.config([
    '$compileProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function($compileProvider, $stateProvider, $urlRouterProvider) {
      // $compileProvider.debugInfoEnabled( false );

      $urlRouterProvider.otherwise('/home');

      var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: './html/homeView.html',
        controller: 'homeCtrl'
      };

      $stateProvider.state(homeState)
      // .state(quizState)
    }
  ]);
})();
