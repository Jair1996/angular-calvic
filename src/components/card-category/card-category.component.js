angular.module('componentsModule').component('appCardCategory', {
  templateUrl: './src/components/card-category/card-category.template.html',
  bindings: {
    textcolor: '@',
    textcontent: '@',
    textbgcolor: '@',
    textbgcontent: '@',
    bcolor: '@',
    img: '@',
    imgstyle: '@',
  },
});
