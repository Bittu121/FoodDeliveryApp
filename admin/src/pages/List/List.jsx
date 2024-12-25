import { useState, useEffect } from "react";
import "./List.css";
import { currency } from "../../assets/assets.js";
import axios from "axios";
import { url } from "../../config/config.js";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";

function List() {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch the food list
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Failed to fetch data");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the list");
    }
  };

  // Remove a food item
  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, {
        id: foodId,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        // Fetch the updated list after removal
        fetchList();
        // Reset to the first page if the current page becomes empty
        if ((currentPage - 1) * itemsPerPage >= list.length - 1) {
          setCurrentPage((prev) => Math.max(prev - 1, 1));
        }
      } else {
        toast.error("Failed to remove the item");
      }
    } catch (error) {
      toast.error("An error occurred while removing the item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // Calculate the range of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = list.slice(startIndex, endIndex);

  const totalPages = Math.ceil(list.length / itemsPerPage);

  return (
    <div className="list flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {currentItems.map((item, index) => (
          <div key={item._id || index} className="list-table-format">
            <img src={`${url}/images/` + item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <p className="cursor" onClick={() => removeFood(item._id)}>
              <AiOutlineDelete size={22} />
            </p>
          </div>
        ))}
        {currentItems.length === 0 && (
          <div className="no-data">No data available</div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default List;
