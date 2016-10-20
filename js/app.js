/**
 * Created by pragyagoel on 10/20/16.
 */
var app=angular.module('myApp',[]);

app.controller('registerationController',['$scope',
    function ($scope) {

    $scope.register = function () {
        $scope.message = 'Welcome ' + $scope.user.firstName;
    }
}]);
