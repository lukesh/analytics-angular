'use strict';
(function() {

    angular.module('Topsy.directives').directive('topicBar', [function() {
        return {
            restrict: 'E',
            transclude: false,
            templateUrl: '/app/directives/topic_bar/topic_bar.html',
            scope: {
                topic: '=topic'
            },
            link: function($scope, el, attrs) {

                $scope.$watch('topic', function(n, o, s) {
                });

            }
        };
    }]);

})();
