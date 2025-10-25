import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { tenantResolver } from "../middlewares/tenantResolver.js";

const router = express.Router();

// Example protected route
router.get("/data", verifyToken, tenantResolver, async (req, res) => {
  try {
    const tenantIdFromToken = req.user.tenantId;
    const tenantIdFromRequest = req.tenantId;

    if (tenantIdFromToken !== tenantIdFromRequest) {
      return res.status(403).json({ message: "Forbidden: Tenant mismatch" });
    }

    // Dummy data for test
    const sampleData = [
      { tenantId: "t1", data: "Tenant 1 private data" },
      { tenantId: "t2", data: "Tenant 2 private data" },
    ];

    const filtered = sampleData.filter((item) => item.tenantId === tenantIdFromRequest);
    res.json({ success: true, data: filtered });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
