(function () {
  'use strict';

  angular
    .module('ngSocial.facebook', [
      'ngFacebook'
    ])
    .config(function ($facebookProvider) {
      $facebookProvider
        .setAppId('961150220610960')
        .setPermissions('email, public_profile, user_posts, publish_actions, user_photos');
    })
    .run(function ($rootScope) {
      // Cut and paste the "Load the SDK" code from the facebook javascript sdk page.

      // Load the facebook SDK asynchronously
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    });

})();