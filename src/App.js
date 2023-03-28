import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 5, 28),
      title: 'Car Insurance',
      amount: 587,
    },
    {
      id: 'e2',
      date: new Date(2003, 4, 8),
      title: 'Health Insurance',
      amount: 58,
    },
    {
      id: 'e3',
      date: new Date(1923, 8, 21),
      title: 'tanks',
      amount: 58787,
    },
    {
      id: 'e4',
      date: new Date(2069, 9, 3),
      title: 'House on the Mars',
      amount: 96587,
    },
  ];

  
  return (
    <div>
      <h2>Let's get started!</h2>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      >
      
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      >
        
      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      >
    
      </ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      >
        
      </ExpenseItem>
    </div>
  );
}

export default App;
