angular.module('componentsModule').component('appProductGridItem', {
  templateUrl: './src/components/product-grid-item/product-grid-item.template.html',
  bindings: {
    product: '<',
  },
  controller: [
    '$location',
    function ProductGridItemController($location) {
      const self = this;
      self.handleClick = function () {
        $location.path(`producto/${self.product._id}`);
      };
    },
  ],
});
