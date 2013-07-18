require([
    'app',

    'services/config',
    'services/api',

    'views/main',
    'views/dashboard/dashboard',
    'views/activity/activity',
    'views/discovery/discovery',
    'views/exposure/exposure',
    'views/geography/geography',
    'views/influencers/influencers',
    'views/sentiment/sentiment',
    'views/top_results/top_results',

    'directives/topic_bar/topic_bar',
    'directives/filter_bar/filter_bar',
    'directives/tabs/tabs',

    'filters/filters',

    'vendor/moment.min',
    'vendor/angular/keypress',
    'vendor/jquery-1.10.2.min'
], function() {
    angular.bootstrap(document.getElementsByTagName('body')[0], ['Topsy'])
})
