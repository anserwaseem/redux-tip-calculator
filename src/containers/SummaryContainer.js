import { connect } from "react-redux";
import { Summary } from "../components/Summary";

const mapStateToProps = (state) => {
  // use reduce to sum the price of all items
  const subTotal = state.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const tipAmount = subTotal * (state.tipPercentage / 100);

  const total = subTotal + tipAmount;

  return {
    subTotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
