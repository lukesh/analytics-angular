'use strict';
(function() {

    angular.module('Topsy.directives').directive('topicBar', [function() {
        return {
            transclude: false,
            templateUrl: '/app/directives/topic_bar/topic_bar.html',
            scope: {
                topic: '=topic'
            },
            link: function($scope, el, attrs) {

                $scope.model = {
                    newTag: ''
                };

                $scope.$watch('topic', function(n, o, s) {
                });

                $scope.addNewTag = function() {
                    $.each($scope.model.newTag.split(','), function(i, e) {
                        var term = $.trim(e);
                        if(term && term.length > 0) {
                            $scope.topic.tags.push(term);
                        }
                    });
                    $scope.model.newTag = '';
                };

                $scope.removeTag = function(tag) {
                    $scope.topic.tags = $.grep($scope.topic.tags, function(e) { return e != tag; });
                };

            }
        };
    }]);

})();
