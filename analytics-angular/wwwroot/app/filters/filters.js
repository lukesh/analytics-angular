'use strict';
(function() {

    angular.module('Topsy.filters')
        .filter('parseTimestamp', [function() {
            return function(timestamp) {
                return timestamp ? new Date(timestamp * 1000) : '';
            };
        }])
        .filter('search', [function() {
            return function(objects, fieldName, searchText) {
                if (objects == undefined || objects.length == 0) return objects;
                if(searchText == undefined || searchText.length == 0) return objects;
                return objects.filter(function(o) {
                    var terms = searchText.toLowerCase().split(' '),
                       found = 0,
                       str = o[fieldName] ? o[fieldName] : '';

                    str = str.toLowerCase();
                    $.each(terms, function(i, e) {
                        if(str.indexOf(e) > -1) {
                            found++;
                        }
                    });
                    return found == terms.length;
                });
            };
        }]);

})();
