import './App.css';
import Card from './components/Card';
import ExpenseItem from './components/ExpenseItem';
import ExpenseForm from './components/ExpenseForm';
import { useState } from 'react';

function App() {
  const [expenseData, setExpenseData] = useState(
    [
      {price: 20, description: "New shoes", date: new Date(2024, 1, 10)},
      {price: 200, description: "Bike", date: new Date(2024, 1, 12)},
      {price: 500, description: "Phone", date: new Date(2024, 1, 15)},
      {price: 1000, description: "Laptop", date: new Date(2024, 1, 17)},
    ]
  );

  const handleAddItem = (item) => {
    setExpenseData((prevExpenseData) => {
      return [...prevExpenseData, item]
    });
  };

  return (
    <>
      <ExpenseForm onSubmit={handleAddItem} />
      <Card>
          {expenseData.map((item, index) => {
            return (
              <ExpenseItem key={index} date={item.date} price={item.price} description={item.description} />
            )
          })}
      </Card>
    </>
     
  );
}

export default App;
