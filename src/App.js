import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 5, 28),
      Title: 'Car Insurance',
      Amount: 587,
    },
    {
      id: 'e2',
      date: new Date(2003, 4, 8),
      Title: 'Health Insurance',
      Amount: 58,
    },
    {
      id: 'e3',
      date: new Date(1923, 8, 21),
      Title: 'tanks',
      Amount: 58787,
    },
    {
      id: 'e4',
      date: new Date(2069, 9, 3),
      Title: 'House on the Mars',
      Amount: 96587,
    },
  ];

  
  return (
    <div>
      <h2>Let's get started!</h2>

      <ExpenseItem
        title={expenses[0].Title}
        amount={expenses[0].Amount}
        date={expenses[0].date}
      >
      
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].Title}
        amount={expenses[1].Amount}
        date={expenses[1].date}
      >
        
      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].Title}
        amount={expenses[2].Amount}
        date={expenses[2].date}
      >
    
      </ExpenseItem>
      <ExpenseItem
        title={expenses[3].Title}
        amount={expenses[3].Amount}
        date={expenses[3].date}
      >
        
      </ExpenseItem>
    </div>
  );
}

export default App;
