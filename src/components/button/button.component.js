angular.module('componentsModule').component('appButton', {
  templateUrl: './src/components/button/button.template.html',
  bindings: {
    text: '@',
    type: '@',
    path: '@',
  },
  controller: [
    '$location',
    function ButtonController($location) {
      const self = this;

      self.click = function () {
        $location.path(self.path);
      };
    },
  ],
});
