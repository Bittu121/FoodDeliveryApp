import { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../../assets/frontend_assets/assets.js";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { StoreContext } from "../../../Context/StoreContext.jsx";
import { url } from "../../../config/config.js";

function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // const [itemCount, setItemCount] = useState(0);
  // const increment = () => setItemCount((prev) => prev + 1);
  // const decrement = () => setItemCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        {/* <img className="food-item-imge" src={image} alt={name} /> */}
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            alt="add-icon"
            // onClick={increment}
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <IoIosRemoveCircleOutline
              size={28}
              className="icon"
              // onClick={decrement}
              onClick={() => removeFromCart(id)}
            />
            {/* <p>{itemCount}</p> */}
            <p>{cartItems[id]}</p>
            <IoIosAddCircleOutline
              size={28}
              className="icon"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
