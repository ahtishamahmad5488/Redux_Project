import {ADD_TO_CART, REMOVE_TO_CART} from './Constants';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function removeToCart(item) {
  return {
    type: REMOVE_TO_CART,
    data: item,
  };
}
