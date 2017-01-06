/* global angular */

(function () {

    "use strict";

    angular.module("gridApp").service("gridMainService", ["$q", "gridConfigService", "gridDataService", function ($q, gridConfigService, gridDataService) {

            var self = this;

            self.gridOptions = {};

            self.loadGridOptions = function () {
                return $q.all([
                    gridConfigService.loadConfigData(),
                    gridDataService.loadRowData()
                ]).then(function () {

                    self.gridOptions = {
                        columnDefs: gridConfigService.columnDefs,
                        rowData: gridDataService.rowData
                    };

                    return self.gridOptions;
                });
            };


        }]);

})();