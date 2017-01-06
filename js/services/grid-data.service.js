/* global angular */

(function () {

    "use strict";

    angular.module("gridApp").service("gridDataService", ["$interval", "$injector", function ($interval, $injector) {

            var self = this;

            self.rowData = [
                {make: "Toyota", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}
            ];

            // this is the test functionality function to add new row
            var index = 1;
            $interval(function () {

                var rowToAdd = {
                    make: "VW " + index,
                    model: "Golf " + index,
                    price: 10000 * index
                };

                var newItems = [rowToAdd];

                var gridMainService = $injector.get('gridMainService');

                gridMainService.gridOptions.api.addItems(newItems);

                index++;

            }, 500, 10);

        }]);

})();