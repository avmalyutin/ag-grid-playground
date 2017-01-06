/* global angular */

(function () {

    "use strict";

    angular.module("gridApp").service("gridConfigService", ["$timeout", function ($timeout) {

            var self = this;

            self.columnDefs = [];

            self.loadConfigData = function () {
                return $timeout(function () {
                    var responseFromServer = [
                        {headerName: "Make", field: "make"},
                        {headerName: "Model", field: "model"},
                        {headerName: "Price", field: "price"}
                    ];

                    self.columnDefs = responseFromServer;

                    return self.columnDefs;

                }, 400);
            };


        }]);

})();