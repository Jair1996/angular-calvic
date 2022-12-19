angular.module('pagesModule').component('appProduct', {
  templateUrl: './src/pages/product/product.template.html',
  controller: [
    '$routeParams',
    '$http',
    'Cart',
    function ButtonController($routeParams, $http, Cart) {
      const self = this;

      self.loading = true;
      self.bigImage = '';
      self.sizeSelected = undefined;

      self.addCart = function () {
        const { _id, brand, sku, price, images, model } = self.product;

        const product = {
          _id,
          brand,
          img: images[0],
          model,
          price,
          sku,
          size: self.sizeSelected,
          quantity: 1,
        };

        Cart.setProductInCart(product);
      };

      self.handleClick = function (sizeSelected) {
        self.sizeSelected = sizeSelected;
        // console.log(self.sizeSelected);
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
