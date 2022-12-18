angular.module('componentsModule').component('appBanner', {
  templateUrl: './src/components/banner/banner.template.html',
  bindings: {
    img: '@',
    bcolor: '@',
    textbgcolor: '@',
    texttitle: '@',
    textdescription: '@',
    textbg: '@',
  },
});
