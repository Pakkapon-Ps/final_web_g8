const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();
app.use(cors());
app.use(express.json());

// 📦 API ดึงสินค้าจาก Firestore
app.get("/products", async (req, res) => {
  const snapshot = await db.collection("products").get();
  let products = [];
  snapshot.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));
  res.json(products);
});

// 🛒 เพิ่มสินค้าลงตะกร้า
app.post("/cart", async (req, res) => {
  const { userId, productId } = req.body;
  await db.collection("carts").add({ userId, productId });
  res.json({ message: "Added to cart" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));