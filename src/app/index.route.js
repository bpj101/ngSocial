(function () {
  'use strict';

  angular
    .module('ngSocial')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home.facebook', {
        url: '/facebook',
        templateUrl: 'app/facebook/facebook.html',
        controller: 'FacebookController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();