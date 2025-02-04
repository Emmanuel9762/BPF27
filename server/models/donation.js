import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: Number,
  frequency: { type: String, enum: ["once", "monthly"], default: "once" },
  transactionId: String,
  status: { type: String, enum: ["pending", "successful", "failed"], default: "pending" },
}, { timestamps: true });

export default mongoose.model("Donation", donationSchema);
