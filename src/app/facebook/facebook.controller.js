(function () {
  'use strict';
  angular.module('ngSocial.facebook')
    .controller('FacebookController', ['$scope', '$facebook',
      function ($scope, $facebook) {
        $scope.isLoggedIn = false;
        $scope.welcomeMsg = 'Please Log In';

        $scope.login = function () {
          $facebook.login().then(function () {
            console.log('Loogged In');
            $scope.isLoggedIn = true;
            refresh();
          });
        };

        $scope.logout = function () {
          $facebook.logout().then(function () {
            console.log('Loogged Out');
            $scope.isLoggedIn = false;
            refresh();
          });
        };

        function refresh() {
          $facebook.api('/me', {
        fields: 'last_name, first_name, email, gender, locale, link, picture, permissions, posts'
          }).then(function (response) {
              $scope.welcomeMsg = 'Welcome ' + response.name;
              $scope.isLoggedIn = true;
              $scope.userInfo = response;
              $scope.picture = response.picture.data.url;
              $scope.permissions = response.permissions.data;
              $scope.posts = response.posts.data;
              console.log(response);
            },
            function (err) {
              $scope.welcomeMsg = 'Please Log In';
            });
        }
        refresh();
      }
    ]);

}());