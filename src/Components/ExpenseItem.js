import "./ExpenseItem.css";

function ExpenseItem(props) {
// function ExpenseItem() {
// var title='valobasha';
// var date= new Date(2023,2,14);
// var amount= 69;

//   return (
//     <div className="expense-item">
//       <div className="expense-item__description">
//         {date.toISOString()}
//       </div>
//       <div>
//         <h2> {title} </h2>
//         <div className="expense-item__price"> ${amount} </div>
//       </div>
//     </div>
//   );
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        {/* {props.date.toISOString()} */}
        {props.date.toISOString().slice(0, 10)}
      </div>
      <div>
        <h2> {props.title} </h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
