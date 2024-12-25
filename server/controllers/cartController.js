import userModel from "../models/userModel.js";

// add to cart => api/cart/add   Note:- this api aspect food id->itemId set in body and user login->token set in header
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId }); //Take from middleware
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1; //new entry
    } else {
      cartData[req.body.itemId] += 1; //increase value
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.status(200).json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// get cart => api/cart/get  Note:- this api aspect user login->token set in header
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.status(200).json({ success: true, cartData: cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// remove food from cart => api/cart/remove Note:- this api aspect food id->itemId set in body and user login->token set in header
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res
      .status(200)
      .json({ success: true, message: "Removed From Cart Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
