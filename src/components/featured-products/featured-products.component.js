angular.module('componentsModule').component('appFeaturedProducts', {
  templateUrl: './src/components/featured-products/featured-products.template.html',
  controller: [
    '$http',
    function ButtonController($http) {
      const self = this;

      $http
        .get('https://restserver-calvic-production.up.railway.app/api/products/featureds')
        .then(function (response) {
          self.products = response.data;
        });
    },
  ],
});
