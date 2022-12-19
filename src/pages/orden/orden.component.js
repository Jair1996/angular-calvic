angular.module('pagesModule').component('appOrden', {
  templateUrl: './src/pages/orden/orden.template.html',
  controller: [
    'Cart',
    '$http',
    function CartController(Cart, $http) {
      const self = this;

      self.products = Cart.getProductsInCart();

      self.pagando = false;
      self.loading = true;
      self.message = 'Espere un momento mientras completamos su compra.';

      self.handlePagar = function () {
        const date = new Date();

        const orden = {
          fecha: date.toLocaleDateString(),
          hora: date.toLocaleTimeString(),
          products: Cart.getProductsInCart(),
          tarjeta: self.numerotarjeta,
        };

        self.pagando = true;

        $http
          .post(
            'https://restserver-calvic-production.up.railway.app/api/pedido',
            JSON.stringify(orden)
          )
          .then(
            function (response) {
              self.loading = false;
              self.message = 'Su compra fue realizada. Gracias por confiar en nosotros!';
              Cart.resetCart();
              self.products = Cart.getProductsInCart();
            },
            function (error) {
              self.loading = false;
              self.message = 'Ha ocurrido un error, intentelo nuevamente o realizalo mas tarde';
              console.log(error);
            }
          );
      };
    },
  ],
});
