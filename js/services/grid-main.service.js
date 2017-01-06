/* global angular */

(function () {

    "use strict";

    angular.module("gridApp").service("gridMainService", ["gridConfigService", "gridDataService", function (gridConfigService, gridDataService) {

            var self = this;

            self.gridOptions = {
                columnDefs: gridConfigService.columnDefs,
                rowData: gridDataService.rowData
            };

        }]);

})();