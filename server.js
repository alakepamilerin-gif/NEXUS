import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

app.get("/api/properties", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Genesis Villa",
      tokenId: "#001",
      location: "Dubai",
      price: "12 ETH",
      image: "/images/house1.jpg",
    },
    {
      id: 2,
      name: "Oceanview Estate",
      tokenId: "#002",
      location: "Lagos",
      price: "9 ETH",
      image: "/images/house2.jpg",
    },
    {
      id: 3,
      name: "Skyline Penthouse",
      tokenId: "#003",
      location: "New York",
      price: "18 ETH",
      image: "/images/house3.jpg",
    },
  ]);
});

app.get("/api/mint", (req, res) => {
  res.json({
    block: Math.floor(Math.random() * 99999999),
  });
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});