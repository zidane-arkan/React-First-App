import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/ManageExpense/NewExpense';


function App() {
  return (
    <div className="App">
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;
