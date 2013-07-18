'use strict';
(function() {

    angular.module('Topsy.views').controller('MainController', ['$scope', '$location', function($scope, $location) {
        
        $scope.model = {
            location: null,
            name: 'Main'
        };

        $scope.constants = {
            dateRanges: [
                {
                    "name": "Last hour",
                    "value": "1 hour"
                },
                {
                    "name": "Last 12 hours",
                    "value": "12 hours"
                },
                {
                    "name": "Last 7 days",
                    "value": "7 days"
                },
                {
                    "name": "Last 30 days",
                    "value": "30 days"
                },
                {
                    "name": "Last 90 days",
                    "value": "90 days"
                },
                {
                    "name": "Last 180 days",
                    "value": "180 days"
                }
            ]
        };

        $scope.topic = {
            tags: [],
            dateRange: $scope.constants.dateRanges[0]
        };

        $scope.$on('$routeChangeSuccess', function(event) {
            $scope.model.location = $location.path();
        });
        
    }]);

})();
