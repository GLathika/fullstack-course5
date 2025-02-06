(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";

        $scope.checkLunch = function () {
            if ($scope.lunchItems.trim() === "") {
                $scope.message = "Please enter data first";
            } else {
                var items = $scope.lunchItems.split(',');
                var itemCount = items.length;

                if (itemCount <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }
            }
        };
    }
})();