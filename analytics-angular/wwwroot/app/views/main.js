'use strict';
(function() {

    angular.module('Topsy.views').controller('MainController', ['$scope', '$location', function($scope, $location) {
        
        $scope.model = {
            location: null,
            topic: {
                tags: ['hello', 'tags']
            },
            name: 'Main'
        };

        $scope.$on('$routeChangeSuccess', function(event) {
            $scope.model.location = $location.path();
        });
        
    }]);

})();
