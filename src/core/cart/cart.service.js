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

  function resetCart() {
    _productsInCart = [];
    syncLocalStorage();
    notify();
  }

  function increment(id, size) {
    const productFound = _productsInCart.find(
      (product) => product._id === id && product.size === size
    );
    productFound.quantity += 1;
    syncLocalStorage();
    notify();
  }

  function decrement(id, size) {
    const productFound = _productsInCart.find(
      (product) => product._id === id && product.size === size
    );
    productFound.quantity -= 1;
    syncLocalStorage();
    notify();
  }

  function deleteProduct(id, size) {
    _productsInCart = _productsInCart.filter(
      (product) => product._id !== id || product.size !== size
    );

    syncLocalStorage();
    notify();
  }

  function getOrderPrice() {
    return _productsInCart.reduce((acc, product) => acc + product.quantity * product.price, 0);
  }

  function syncLocalStorage() {
    localStorage.setItem('calvicProducts', JSON.stringify(_productsInCart));
  }

  function getProductsInCart() {
    return _productsInCart;
  }

  function getQuantityProductsInCart() {
    return _productsInCart.reduce((acc, product) => acc + product.quantity, 0);
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
    resetCart,
    increment,
    decrement,
    getOrderPrice,
    deleteProduct,
    getQuantityProductsInCart,
    subscribe,
  };
});
