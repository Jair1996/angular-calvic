angular.module('componentsModule').component('appOrderPrice', {
  template: '<span>{{$ctrl.orderPrice | currency:"S/. "}}</span>',
  controller: [
    '$scope',
    'Cart',
    function ButtonController($scope, Cart) {
      const self = this;

      self.orderPrice = Cart.getOrderPrice();

      Cart.subscribe($scope, () => {
        self.orderPrice = Cart.getOrderPrice();
      });
    },
  ],
});
