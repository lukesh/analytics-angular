'use strict';
(function() {

    angular.module('Topsy.directives').directive('filterBar', [function() {
        return {
            restrict: 'E',
            transclude: false,
            templateUrl: '/app/directives/filter_bar/filter_bar.html',
            scope: {
                topic: '=topic'
            },
            link: function($scope, el, attrs) {
                
            }
        };
    }]);

})();
