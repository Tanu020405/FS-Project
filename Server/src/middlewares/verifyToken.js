import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
  try {
    // 1️⃣ Header se token nikalna
    const authHeader = req.headers.authorization;

    // 2️⃣ Agar token missing hai → error bhejna
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token missing or invalid" });
    }

    // 3️⃣ "Bearer <token>" me se sirf token nikalna
    const token = authHeader.split(" ")[1];

    // 4️⃣ Token verify karna
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5️⃣ Agar valid hai → user info req me attach kar dena
    req.user = decoded;

    // 6️⃣ Next middleware/controller ko control dena
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token", error: err.message });
  }
};
