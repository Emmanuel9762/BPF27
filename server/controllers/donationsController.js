// server/controllers/donationsController.js
import Donation from "../models/donation.js";

export const processDonation = async (req, res) => {
  const { name, email, amount, frequency } = req.body;

  try {
    const donation = new Donation({ name, email, amount, frequency });
    await donation.save();
    res.status(201).json({ message: "Donation initialized", donation });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};



