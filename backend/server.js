const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.jsx");
const transactionRoutes = require("./routes/transactionRoutes.jsx");
const path = require("path");
const { errorHandler, notFound } = require("./middleware/errorMiddleware.jsx");

const app = express();

dotenv.config();

connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);

// --------------------------deployment------------------------------
const __Kwaba_react_app = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__Kwaba_react_app, "/frontend/build")));

    app.get("*", (req, res) =>
        res.sendFile(
            path.resolve(__Kwaba_react_app, "frontend", "build", "index.html")
        )
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running..");
    });
}
// --------------------------deployment------------------------------

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// app.listen(PORT, console.log(`server started on PORT ${PORT}`));
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
        .bold
    )
);