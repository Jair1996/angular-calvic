angular.module('pagesModule').component('appCart', {
  templateUrl: './src/pages/cart/cart.template.html',
  controller: [
    'Cart',
    function CartController(Cart) {
      const self = this;

      self.products = Cart.getProductsInCart();

      self.handleIncrement = function (idProducto, productSize) {
        Cart.increment(idProducto, productSize);
      };

      self.handleDecrement = function (idProducto, productSize) {
        Cart.decrement(idProducto, productSize);
      };

      self.handleDeleteProduct = function (idProducto, productSize) {
        Cart.deleteProduct(idProducto, productSize);
        self.products = Cart.getProductsInCart();
      };

      self.handleCLick = function () {
        console.log(self.products);
      };
    },
  ],
});
