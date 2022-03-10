const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const postRoutes = require("./routes/newPost");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/post", postRoutes);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})