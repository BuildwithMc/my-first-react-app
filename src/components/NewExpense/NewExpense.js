import "./NewExpense.css";
import Form from "./Form";

function NewExpense(props) {
    function onSaveExpenseDataHandler(recievedProps) { 
        const expenseData = {
            ...recievedProps,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
        // console.log(expenseData);
    };

    return (<div className="new-expense">
        <Form onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>);
}

export default NewExpense;