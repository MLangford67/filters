var MyApp;
(function (MyApp) {
    var FoodList = (function () {
        function FoodList() {
        }
        return FoodList;
    }());
    angular.module('MyApp', []).constant('productsServiceUrl', { get: '/api/products/getProducts', post: '/api/products/create' });
})(MyApp || (MyApp = {}));
