/* global angular */

(function () {

    "use strict";

    angular.module("gridApp").service("gridConfigService", ["$log", function ($log) {

            var self = this;

            self.columnDefs = [
                {headerName: "Make", field: "make"},
                {headerName: "Model", field: "model"},
                {headerName: "Price", field: "price"}
            ];

        }]);

})();