'use strict';

/* Filters */

angular.module('KnowledgeBase.filters', [])
    .filter('pagination', function () {
        return function (input, start) {
            start = parseInt(start, 10);
            return input.slice(start);
        };
    });
