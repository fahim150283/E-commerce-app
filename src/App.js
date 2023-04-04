import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: new Date(1923, 8, 21),
      title: "Tanks",
      amount: 58787,
    },
    {
      date: new Date(2003, 3, 8),
      title: "Armor",
      amount: 528,
    },
    {
      date: new Date(2022, 4, 2),
      title: "Missile Launcher",
      amount: 5876,
    },
    {
      date: new Date(2023, 5, 28),
      title: "war Robots",
      amount: 58750,
    },

    {
      date: new Date(2069, 9, 3),
      title: "House on the Mars",
      amount: 96587,
    },
    {
      date: new Date(2099, 11, 30),
      title: "Planet War",
      amount: 1996587,
    },
  ];

  return (
    <div>
      <h2>Let's get started with the MasterPlan </h2>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[5].title}
        amount={expenses[5].amount}
        date={expenses[5].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
