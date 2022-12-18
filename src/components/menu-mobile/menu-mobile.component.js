angular.module('componentsModule').component('appMenuMobile', {
  templateUrl: './src/components/menu-mobile/menu-mobile.template.html',
  controller: function hola() {
    const self = this;

    self.toggle = false;

    self.handleTogleMenu = function () {
      this.toggle = !this.toggle;
    };
  },
});
