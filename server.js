import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

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

app.listen(3001, () => {
  console.log("API running on port 3001");
});