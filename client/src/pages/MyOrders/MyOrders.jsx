import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import axios from "axios";
import { url } from "../../config/config.js";
import { StoreContext } from "../../Context/StoreContext.jsx";
import { assets } from "../../assets/frontend_assets/assets.js";

function MyOrders() {
  const [data, setData] = useState([]);
  const { token, currency } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="orders-container">
        {data.map((order, index) => (
          <div key={index} className="order-card">
            <img
              src={assets.parcel_icon}
              alt="parcel-icon"
              className="order-icon"
            />
            <div className="order-details">
              <p className="order-items">
                {order.items.map((item, idx) =>
                  idx === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>
              <p className="order-amount">
                {currency}
                {order.amount}.00
              </p>
              <p className="order-status">
                <span
                  className={`status-dot ${order.status.toLowerCase()}`}
                ></span>
                <b>{order.status}</b>
              </p>
            </div>
            <button className="track-order-btn" onClick={fetchOrders}>
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
