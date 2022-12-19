angular.module('componentsModule').component('appProductQuantity', {
  template: '<div>{{$ctrl.quantity}}</div>',
  controller: [
    '$scope',
    'Cart',
    function ButtonController($scope, Cart) {
      const self = this;

      self.quantity = Cart.getQuantityProductsInCart();

      Cart.subscribe($scope, () => {
        self.quantity = Cart.getQuantityProductsInCart();
      });
    },
  ],
});
