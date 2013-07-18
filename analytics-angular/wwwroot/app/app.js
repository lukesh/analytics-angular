'use strict';
(function() {

    angular.module('Topsy', 
        [
            'Topsy.services', 
            'Topsy.filters',
            'Topsy.directives',
            'Topsy.views'
        ])
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        
            $routeProvider.when('/dashboard', { templateUrl: '/app/views/dashboard/dashboard.html', controller: 'DashboardController' });
            $routeProvider.when('/activity', { templateUrl: '/app/views/activity/activity.html', controller: 'ActivityController' });
            $routeProvider.when('/discovery', { templateUrl: '/app/views/discovery/discovery.html', controller: 'DiscoveryController' });
            $routeProvider.when('/influencers', { templateUrl: '/app/views/influencers/influencers.html', controller: 'InfluencersController' });
            $routeProvider.when('/top-results', { templateUrl: '/app/views/top_results/top_results.html', controller: 'TopResultsController' });
            $routeProvider.when('/geography', { templateUrl: '/app/views/geography/geography.html', controller: 'GeographyController' });
            $routeProvider.when('/exposure', { templateUrl: '/app/views/exposure/exposure.html', controller: 'ExposureController' });
            $routeProvider.when('/sentiment', { templateUrl: '/app/views/sentiment/sentiment.html', controller: 'SentimentController' });
            $routeProvider.otherwise({ redirectTo: '/dashboard' });

            $locationProvider.html5Mode(true);

        }]);

    angular.module('Topsy.services', []);
    angular.module('Topsy.filters', []);
    angular.module('Topsy.directives', []);
    angular.module('Topsy.views', []);

})();
