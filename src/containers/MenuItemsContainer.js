import { connect } from 'react-redux';
import { MenuItems } from '../components/MenuItems';

// This is just a function where Redux is going to pass in our entire state tree and we can pluck off what we want from it and map it to the props of the component that we're working with.
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

export const MenuItemsContainer = connect(mapStateToProps)(MenuItems);
