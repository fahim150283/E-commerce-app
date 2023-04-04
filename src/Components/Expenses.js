import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
    
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[4].title}
        amount={props.item[4].amount}
        date={props.item[4].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[5].title}
        amount={props.item[5].amount}
        date={props.item[5].date}
      ></ExpenseItem>
    </Card>
  
  );
}

export default Expenses;
