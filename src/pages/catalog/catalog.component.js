angular.module('pagesModule').component('appCatalog', {
  templateUrl: './src/pages/catalog/catalog.template.html',
  controller: [
    '$http',
    function ButtonController($http) {
      const self = this;

      self.toogle = false;
      self.loading = true;
      self.category = '';
      self.subcategory = '';

      $http
        .get('https://restserver-calvic-production.up.railway.app/api/products')
        .then(function (response) {
          self.loading = false
          self.products = response.data;
        });

      self.handleTogleMenu = function () {
        self.toogle = !self.toogle;
      };

      self.getProductFilter = function (cat, subcat) {
        self.category = cat;
        self.subcategory = subcat;
      };
    },
  ],
});
