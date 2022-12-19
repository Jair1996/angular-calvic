angular.module('pagesModule').component('appOrden', {
  templateUrl: './src/pages/orden/orden.template.html',
  controller: [
    'Cart',
    function CartController(Cart) {
      const self = this;
    },
  ],
});
