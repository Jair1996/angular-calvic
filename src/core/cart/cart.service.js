angular.module('core.cart').factory('Cart', function ($rootScope) {
  let _productsInCart = JSON.parse(localStorage.getItem('calvicProducts')) || [];

  function setProductInCart(product) {
    const { _id, size } = product;

    const productFound = _productsInCart.find(
      (product) => product._id === _id && product.size === size
    );

    if (productFound) {
      productFound.quantity += product.quantity;
    } else {
      _productsInCart.push(product);
    }
    syncLocalStorage();
    notify();
  }

  function syncLocalStorage() {
    localStorage.setItem('calvicProducts', JSON.stringify(_productsInCart));
  }

  function getProductsInCart() {
    return _productsInCart;
  }

  function subscribe(scope, callback) {
    const handler = $rootScope.$on('notifying-service-event', callback);
    scope.$on('$destroy', handler);
  }

  function notify() {
    $rootScope.$emit('notifying-service-event');
  }

  return {
    getProductsInCart,
    setProductInCart,
    subscribe,
  };
});
