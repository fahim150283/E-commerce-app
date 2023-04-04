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
      amount: 52438,
    },
    {
      date: new Date(2022, 4, 2),
      title: "Missile Launcher",
      amount: 15876,
    },
    {
      date: new Date(2023, 5, 28),
      title: "war Robots",
      amount: 658750,
    },

    {
      date: new Date(2069, 9, 3),
      title: "House on the Mars",
      amount: 396587,
    },
    {
      date: new Date(2099, 11, 30),
      title: "Planetary Devastation",
      amount: 21996587,
    },
  ];

  return (
    <div id="title">
      
      <h2 id="mainTilte">
        <img id="titleImg" src="https://media.tenor.com/sT8RH0Dui9YAAAAd/teen-titans-go-pyramid-mummy-money.gif" alt="titleImg"></img>  
        
        <br/>
        
        Let's get started with the MasterPlan 
        </h2>

      <Expenses item = {expenseArray} />
    </div>
  );
}

export default App;
