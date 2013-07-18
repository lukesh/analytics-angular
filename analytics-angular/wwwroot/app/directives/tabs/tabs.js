'use strict';
(function() {

    angular.module('Topsy.directives').directive('tabs', [function() {
        return {
            restrict: 'E',
            transclude: false,
            templateUrl: '/app/directives/tabs/tabs.html',
            scope: true,
            link: function($scope, el, attrs) {

            }
        };
    }]);

})();
