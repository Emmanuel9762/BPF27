// server/routes/donationRoutes.js
import express from "express";
import { processDonation } from "../controllers/donationsController.js";


const router = express.Router();
router.post("/", processDonation);

export default router;


