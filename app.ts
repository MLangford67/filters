// namespace MyApp {
//
//     angular.module('MyApp', ['ui.router']).config(($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
//         $stateProvider
//             .state('Home', {
//                 url: '/',
//                 templateUrl: "ngApp/home.html",
//                 controller: MyApp.Controllers.Page1Controller,
//                 controllerAs: 'controller'
//             })
//             .state('Page1', {
//                 url: '/page1',
//                 templateUrl: "ngApp/page1.html",
//                 controller: MyApp.Controllers.Page1Controller
//             })
//             .state('Page2', {
//                 url: '/page2',
//                 templateUrl: "ngApp/page2.html",
//                 controller: MyApp.Controllers.Page2Controller,
//                 controllerAs: 'controller'
//             });
//         $urlRouterProvider.otherwise('/');
//         $locationProvider.html5Mode(true);
//     });
// }


namespace MyApp{
class FoodList{
  public items;

  constructor(){}
}

  angular.module('MyApp',[]).constant('productsServiceUrl', { get: '/api/products/getProducts', post: '/api/products/create'});

}
