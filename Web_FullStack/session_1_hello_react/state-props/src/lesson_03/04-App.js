import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <>
      <ExpenseItem price="20" description="New Shoes" />
      <ExpenseItem price="200" description="Bike" />
      <ExpenseItem price="500" description="Phone" />
      <ExpenseItem price="1000" description="Laptop" />
    </>
  );
}

export default App;
// Truyền Props vào Item
