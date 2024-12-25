import React from "react";
import "./FindMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets.js";

function FindMenu({ category, setCategory }) {
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h2>ExploreMenu</h2>
        <p className="explore-menu-text">
          Choose from a menu of delicious dishes made with the finest
          ingredients.
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                key={index}
                className="explore-menu-list-item"
              >
                <img
                  src={item.menu_image}
                  className={category === item.menu_name ? "active" : ""}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FindMenu;
