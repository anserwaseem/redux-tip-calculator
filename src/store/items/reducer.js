import produce from 'immer';
import {
  ITEM_ADDED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED,
  ITEM_REMOVED
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
];

export const reducer = produce((state = initialItems, action) => {
  // if (action.type === ITEM_ADDED) return [...state, action.payload];
  if (action.type === ITEM_ADDED) {
    state.push(action.payload);
  }

  if (action.type === ITEM_REMOVED)
    return state.filter((item) => item.uuid !== action.payload.uuid);

  // if (action.type === ITEM_PRICE_UPDATED) {
  //   return state.map((item) => {
  //     if (item.uuid === action.payload.uuid) {
  //       return {
  //         ...item,
  //         price: action.payload.price
  //       };
  //     }
  //     return item;
  //   });
  // }
  if (action.type === ITEM_PRICE_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.price = parseInt(action.payload.price, 10);
  }

  // if (action.type === ITEM_QUANTITY_UPDATED) {
  //   return state.map((item) => {
  //     if (item.uuid === action.payload.uuid) {
  //       return {
  //         ...item,
  //         quantity: action.payload.quantity
  //       };
  //     }
  //     return item;
  //   });
  // }
  if (action.type === ITEM_QUANTITY_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.quantity = parseInt(action.payload.quantity, 10);
  }

  // return state;
}, initialItems);

export default reducer;
