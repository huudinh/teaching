import FoodItem from "./FoodItem";
import "./ListFood.css";

const ListFood = (props) => {
    const {products, onAddToCart} = props;
    return (
        <div className="container">
            <div className="list_food_items">
                {
                    products.map((product) => {
                        return <FoodItem key={product.id} food={product} onAddToCart={onAddToCart} />
                    })
                }
            </div>
        </div>
    )
}

export default ListFood;