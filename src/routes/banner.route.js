import { Router } from "express";
import { createBanner, deleteBanner, getBannerById, getBanners, updateBanner } from "../controllers/banner.controller.js";

const router = Router();

// protected routes
router.post("/create-banner", createBanner);
router.put("/update-banner/:id", updateBanner);
router.get("/get-banner/:id", getBannerById);
router.get("/get-banners", getBanners);
router.delete("/delete-banner/:id", deleteBanner);

export default router;