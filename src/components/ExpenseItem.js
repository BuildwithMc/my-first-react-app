import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(dataProps) {
    

    return (
      <div className="expense-item">
        <ExpenseDate date={dataProps.date} />
        <div className="expense-item__description">
          <h2>{dataProps.title}</h2>
          <div className="expense-item__price">${dataProps.amount}</div>
        </div>
      </div>
    );
}

export default ExpenseItem;