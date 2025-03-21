import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  midleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  tableNumber: {
    type: String,
    allowNull: true,
  },
  reservationDateTime: {
    type: Date,
    allowNull: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Cheif", "Manager", "Cashier", "Waiter", "Customer"],
    default: "Customer",
    required: true,
  },
  salary: {
    type: String,
    allowNull: true,
  },
  myOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  myReservation: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reserve",
    },
  ],
  menuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu"
  }
});

const User = mongoose.model("User", userSchema);
export default User;
