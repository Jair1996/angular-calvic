angular.module('pagesModule').component('appProduct', {
  templateUrl: './src/pages/product/product.template.html',
  controller: [
    '$routeParams',
    '$http',
    function ButtonController($routeParams, $http) {
      const self = this;
      // TODO: AGREGAR INTERACTIVIDAD AL BOTON
      self.loading = true;
      self.bigImage = '';
      self.sizeSelected = undefined;
      self.handleClick = function (sizeSelected) {
        self.sizeSelected = sizeSelected;
        console.log(self.sizeSelected);
      };

      $http
        .get(
          `https://restserver-calvic-production.up.railway.app/api/products/product/${$routeParams.id}`
        )
        .then(function (response) {
          self.loading = false;
          self.product = response.data;
          self.bigImage = response.data.images[0];
        });

      self.handleChangeImage = function (path) {
        self.bigImage = path;
      };
    },
  ],
});
