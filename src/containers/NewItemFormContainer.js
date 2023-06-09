import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewItemForm from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

// use this for complex actions

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       onSubmit: (name, price) => addNewItem(name, price)
//     },
//     dispatch
//   );
// };

// use this for simple actions - no need to use dispatch
const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price)
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
