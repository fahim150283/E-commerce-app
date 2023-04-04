import Expenses from "./Components/Expenses";

function App() {
  const expenseArray = [
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

      <Expenses item = {expenseArray} />
    </div>
  );
}

export default App;
