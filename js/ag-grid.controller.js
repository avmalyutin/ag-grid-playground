/* global angular */

(function () {

    "use strict";

    angular.module("gridApp").controller("gridCtrl", ["$q", "gridMainService", function ($q, gridMainService) {

            var vm = this;


            vm.initialLoad = function () {

                gridMainService.loadGridOptions().then(function () {
                    vm.gridOptions = gridMainService.gridOptions;
                    vm.showGrid = true;
                });
            };

            vm.initialLoad();

        }]);

})();

