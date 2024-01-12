import './App.css';
import Card from './components/Card';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expneseData = [
    {price: 20, description: "New shoes", date: new Date(2024, 1, 10)},
    {price: 200, description: "Bike", date: new Date(2024, 1, 12)},
    {price: 500, description: "Phone", date: new Date(2024, 1, 15)},
    {price: 1000, description: "Laptop", date: new Date(2024, 1, 17)},
  ];
  return (
    <Card>
      <ExpenseItem date={expneseData[0].date} price={expneseData[0].price} description={expneseData[0].description} />
      <ExpenseItem date={expneseData[1].date} price={expneseData[1].price} description={expneseData[1].description} />
      <ExpenseItem date={expneseData[2].date} price={expneseData[2].price} description={expneseData[2].description} />
      <ExpenseItem date={expneseData[3].date} price={expneseData[3].price} description={expneseData[3].description} />
    </Card>
     
  );
}

export default App;
