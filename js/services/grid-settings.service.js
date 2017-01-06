/* global angular */

(function () {

    "use strict";

    angular.module("gridApp").service("gridSettingsService", ["$injector", function ($injector) {

            var self = this;

            self.applyDefaults = function() {
                var sort = [
                    {colId: 'make', sort: 'asc'}
                ];
                
                var gridMainService = $injector.get('gridMainService');
                gridMainService.gridOptions.api.setSortModel(sort);
            };

            self.sortByProductionDesc = function() {
                var sort = [
                    {colId: 'make', sort: 'desc'},
                    {colId: 'model', sort: 'asc'}
                ];
                var gridMainService = $injector.get('gridMainService');
                gridMainService.gridOptions.api.setSortModel(sort);
            };

        }]);

})();