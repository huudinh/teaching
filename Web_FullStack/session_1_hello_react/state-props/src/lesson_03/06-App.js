import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const date = new Date();
  return (
    <>
      <ExpenseItem date={date} price="20" description="New Shoes" />
      <ExpenseItem date={date} price="200" description="Bike" />
      <ExpenseItem date={date} price="500" description="Phone" />
      <ExpenseItem date={date} price="1000" description="Laptop" />
    </>
  );
}

export default App;
