import "./Header.css";

const Header = (props) => {
    const { cart } = props;
    return (
        <div className="app_header">
            <span className="app_name">React Meals</span>
            <button className="card_button">Your Card ({cart.length})</button>
        </div>
    )
}

export default Header;