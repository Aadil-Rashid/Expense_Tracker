import React, { useState } from "react";

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Apple Laptop",
    amount: 520.23,
    date: new Date(2021, 9, 18),
  },
  {
    id: "e2",
    title: "Beeza",
    amount: 3400.23,
    date: new Date(2022, 9, 18),
  },
  {
    id: "e3",
    title: "Fast Track Watch",
    amount: 52.23,
    date: new Date(2021, 8, 9),
  },
  {
    id: "e4",
    title: "House",
    amount: 44520.23,
    date: new Date(2023, 7, 11),
  },
];

// function App() {
// we can write functions as arrow functions as well
const App = () => {
  console.log("Dummy  ");
  console.log(DUMMY_EXPENSES);
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  // Old Syntax
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Aadil Full Stack Developer"),
  //   React.createElement(Expenses, {items: expenses})
  // );
};

export default App;
