/* global angular */

(function () {

    "use strict";

    angular.module("gridApp").service("gridMainService", ["$log", "$q", "gridConfigService", "gridDataService", "gridSettingsService", function ($log, $q, gridConfigService, gridDataService, gridSettingsService) {

            var self = this;

            self.gridOptions = {
            };

            self.loadGridOptions = function () {
                return $q.all([
                    gridConfigService.loadConfigData(),
                    gridDataService.loadRowData()
                ]).then(function () {

                    self.gridOptions = {
                        columnDefs: gridConfigService.columnDefs,
                        rowData: gridDataService.rowData,
                        enableSorting: true,
                        onGridReady: self.onGridReady
                    };

                    return self.gridOptions;
                });
            };

            self.onGridReady = function () {
                $log.info("Grid is ready, apply default settings");

                gridSettingsService.applyDefaults();

            };


        }]);

})();