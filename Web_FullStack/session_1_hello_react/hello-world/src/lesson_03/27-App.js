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

  const handleAddItem = (item) => {
    expenseData.push(item);
  };

  return (
    <>
      <ExpenseForm onSubmit={handleAddItem} />
      <Card>
          {expenseData.map((item) => {
            return (
              <ExpenseItem date={item.date} price={item.price} description={item.description} />
            )
          })}
      </Card>
    </>
     
  );
}

export default App;
// Thu gon ExpenseItem và tạo hàm handleAddItem
