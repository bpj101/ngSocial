(function() {
  'use strict';

  angular
    .module('ngSocial')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
