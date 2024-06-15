import { useState } from 'react';
import Header from "./Header";
import ListFood from "./ListFood";

const data = [
  {
    id: 1,
    name: "Sushi",
    description: "Finest Fish, with seawed",
    price: 22.99,
  },
  {
    id: 2,
    name: "Beef Noodle",
    description: "Fresh beef, with perfect soup",
    price: 10.99,
  },
  {
    id: 3,
    name: "Banh mi",
    description: "Vietname tradition street food",
    price: 5.99,
  },
]

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, amount) => {
    setCart((prevCart) => {
      // return [...prevCart, product]
      if(prevCart.find((item) => item.product.id === product.id)) {
        return prevCart.map((item) => {
          if(item.product.id === product.id) {
            item.amount += amount;
            return item;
          }
          return item;
        })
      } else {
        return [ ...prevCart, { product: product, amount: 1 }];
      }
    });
  }

  return (
    <div>
      <Header cart={cart} />
      <ListFood products={data} onAddToCart={addToCart} />
    </div>
     
  );
}

export default App;
