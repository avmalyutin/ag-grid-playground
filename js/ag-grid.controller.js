/* global angular */

(function () {

    "use strict";

    angular.module("gridApp").controller("gridCtrl", ["gridMainService", "gridSettingsService", function (gridMainService, gridSettingsService) {

            var vm = this;

            vm.initialLoad = function () {

                gridMainService.loadGridOptions().then(function () {
                    vm.gridOptions = gridMainService.gridOptions;
                    vm.showGrid = true;
                });
            };

            vm.initialLoad();

            vm.applyCustomSorting = function () {
                gridSettingsService.sortByProductionDesc();
            };

            vm.applyDefaultSorting = function () {
                gridSettingsService.applyDefaults();
            };


        }]);

})();

