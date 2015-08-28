(function () {
  'use strict';
  angular.module('ngSocial.facebook')
    .controller('FacebookController', ['$scope', '$facebook',
      function ($scope, $facebook) {
        $scope.isLoggedIn = false;
        $scope.welcomeMsg = 'Please Log In';
        $scope.posted = false;

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
        $scope.postStatus = function () {
          var body = this.body;
          $facebook.api('/me/feed', 'post', {
            message: body
          }).then(function (response) {
            $scope.posted = true;
            console.log(response);
            $scope.postMsg = 'Thanks for Posting';
            refresh();
          });
          this.body = '';
        };

        function refresh() {
          $facebook.api('/me', {
            fields: 'last_name, first_name, email, gender, locale, link, picture, permissions, posts'
          }).then(function (response) {
              $scope.welcomeMsg = 'Welcome ' + response.first_name + ' ' + response.last_name;
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