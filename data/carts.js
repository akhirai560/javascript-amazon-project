
export const LOCAL_STORAGE_CART_KEY = 'cart';
export const cart = getFromStorage();

export function addToCart(productId) {
    let matchingItem;
  
    cart.forEach(cartItem => {
      if(cartItem.productId === productId) {
        matchingItem = cartItem;
      }
    });
  
    if(matchingItem) {
      matchingItem.quantity += 1
    } else {
      cart.push({
        productId, quantity: 1, deliveryOptionId: '1'
      });
    }

    saveToStorage();
  }

 export function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach(cartItem => {
      cartQuantity += cartItem.quantity;
    });
  
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    saveToStorage();
  }


export function removeFromCart(id) {
  cart.forEach((item, index) => {
    if(item.productId === id) {
      if(item.quantity > 1) {
        item.quantity--;
      } else {
        cart.splice(index,1)
      }
    }
    
  })

  saveToStorage();
  
}

export const saveToStorage = () => {
  localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart));
}

export function getFromStorage() {
  const fromStorage =  localStorage.getItem(LOCAL_STORAGE_CART_KEY);
  let oldCart;
  try {
    oldCart = JSON.parse(fromStorage) ?? [
      {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      },
      {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }
    ];
  } catch(err) {
    console.log('something wrong with cache', err);
  }

  return oldCart;
}

export function updateDeliveryOptions(productId, deliveryOptionId) {
  const cartProduct = cart.find(item => item.productId === productId);
  cartProduct.deliveryOptionId = deliveryOptionId;
  console.log('cartProduct', cartProduct)
  saveToStorage();
}
