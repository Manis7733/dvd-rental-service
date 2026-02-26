const express         = require("express");
const cors            = require("cors");
const path            = require("path");
const filmRoutes      = require("./routes/film.routes");
const customerRoutes  = require("./routes/customer.routes");
const rentalRoutes    = require("./routes/rental.routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/films",     filmRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/rentals",   rentalRoutes);

app.listen(3000, () => {
  console.log("DVD Rental Service running on port 3000");
});