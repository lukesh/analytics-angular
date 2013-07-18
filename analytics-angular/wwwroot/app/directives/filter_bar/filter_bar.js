'use strict';
(function() {

    angular.module('Topsy.directives').directive('filterBar', [function() {
        return {
            transclude: false,
            templateUrl: '/app/directives/filter_bar/filter_bar.html',
            scope: {
                topic: '=topic',
                availableDateRanges: '=availableDateRanges'
            },
            link: function($scope, el, attrs) {
                
            }
        };
    }]);

})();
