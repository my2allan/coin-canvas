// src/App.js
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BudgetSummary from './components/BudgetSummary';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    // Update budget state based on added expenses
    // You can customize this logic based on your requirements
  };

  return (
    <div>
      <h1>CoinCanvas Budget Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <BudgetSummary budget={budget} expenses={expenses} />
    </div>
  );
}

export default App;
