import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuItem from '../components/MenuItem';
import {
  removeItem,
  updateItemPrice,
  updateItemQuantity
} from '../store/items/actions';

const mapStateToProps = (state, ownProps) => {
  const item = state.items.find((item) => item.uuid === ownProps.uuid);
  //   item.total = item.price * item.quantity;
  return {
    total: item.price * item.quantity,
    ...item
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      remove: () => removeItem(ownProps.uuid),
      updatePrice: (price) => updateItemPrice(ownProps.uuid, price),
      updateQuantity: (quantity) => updateItemQuantity(ownProps.uuid, quantity)
    },
    dispatch
  );
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
