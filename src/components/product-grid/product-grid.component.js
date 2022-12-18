angular.module('componentsModule').component('appProductGrid', {
  templateUrl: './src/components/product-grid/product-grid.template.html',
  bindings: {
    category: '@',
    subcategory: '@',
    products: '<',
  },
});
