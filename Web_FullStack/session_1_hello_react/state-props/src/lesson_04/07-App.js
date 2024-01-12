import './App.css';
import Card from './components/Card';
import Filter from './components/Filter';
import Chart from './components/Chart';
import ExpenseItem from './components/ExpenseItem';
import ExpenseForm from './components/ExpenseForm';
import { useState } from 'react';

function App() {
  const [selectedYear, setSelectedYear] = useState(2021);
  const [expenseData, setExpenseData] = useState([
    {price: 20, description: "New shoes", date: new Date(2021, 1, 10)},
    {price: 200, description: "Bike", date: new Date(2019, 1, 12)},
    {price: 500, description: "Phone", date: new Date(2020, 1, 15)},
    {price: 1000, description: "Laptop", date: new Date(2021, 1, 17)},
  ]);
  const matchedExpenseData = expenseData.filter((item) => {
    return item.date.getFullYear() === selectedYear;
  });

  const handleSelectYearChange = (year) => {
    setSelectedYear(year)
  }

  const handleAddItem = (item) => {
    setExpenseData((prevExpenseData) => {
      return [...prevExpenseData, item]
    });
  };

  return (
    <>
      <ExpenseForm onSubmit={handleAddItem} />
      <Card>
          <Chart data={matchedExpenseData} />
          <Filter year={selectedYear} onChangeYear={handleSelectYearChange} />
          {matchedExpenseData.map((item, index) => {
            return (
              <ExpenseItem key={index} date={item.date} price={item.price} description={item.description} />
            )
          })}
      </Card>
    </>
     
  );
}

export default App;

// Thêm Props onSubmit
