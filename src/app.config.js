angular.module('app').config([
  '$routeProvider',
  function config($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<app-home></app-home>',
      })
      .when('/catalogo', {
        template: '<app-catalog></app-catalog>',
      })
      .when('/nosotros', {
        template: '<app-about-us></app-about-us>',
      })
      .when('/producto/:id', {
        template: '<app-product></app-product>',
      })
      .otherwise('/');
  },
]);
