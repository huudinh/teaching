import './App.css';
import Card from './components/Card';
import ExpenseItem from './components/ExpenseItem';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const expenseData = [
    {price: 20, description: "New shoes", date: new Date(2024, 1, 10)},
    {price: 200, description: "Bike", date: new Date(2024, 1, 12)},
    {price: 500, description: "Phone", date: new Date(2024, 1, 15)},
    {price: 1000, description: "Laptop", date: new Date(2024, 1, 17)},
  ];
  return (
    <>
      <ExpenseForm />
      <Card>
        <ExpenseItem date={expenseData[0].date} price={expenseData[0].price} description={expenseData[0].description} />
        <ExpenseItem date={expenseData[1].date} price={expenseData[1].price} description={expenseData[1].description} />
        <ExpenseItem date={expenseData[2].date} price={expenseData[2].price} description={expenseData[2].description} />
        <ExpenseItem date={expenseData[3].date} price={expenseData[3].price} description={expenseData[3].description} />
      </Card>
    </>
     
  );
}

export default App;

// Add UI Form
