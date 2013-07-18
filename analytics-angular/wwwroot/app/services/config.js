'use strict';
(function() {

    angular.module('Topsy.services').factory('Topsy.services.config', ['$http', function($http) {

        return new function() {

            this.endpoint = '';

        }

    }]);

})();
