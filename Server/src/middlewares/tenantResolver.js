// tenantResolver.js
export const tenantResolver = (req, res, next) => {
  try {
    // Step 1: Tenant ID header se nikalna
    const tenantId = req.header("x-tenant-id");

    // Step 2: Agar tenantId nahi mila toh error bhejna
    if (!tenantId) {
      return res.status(400).json({ message: "Tenant ID is required" });
    }

    // Step 3: Tenant ID ko request object me daal dena
    req.tenantId = tenantId;

    // Step 4: Next middleware/controller ko control dena
    next();
  } catch (err) {
    res.status(500).json({ message: "Tenant resolution failed", error: err.message });
  }
};
