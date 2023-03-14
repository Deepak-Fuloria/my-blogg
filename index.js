const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const cors=require("cors")
app.use(cors())
dotenv.config();
app.use(express.json());
// app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(express.static(path.join(__dirname, "./client/build")));
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '/client/build'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
    }
  })

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.get("/test", (req, res) => {
  res.send("data from backend")
});

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

// app.use("/auth", authRoute);
// app.use("/users", userRoute);
// app.use("/posts", postRoute);
// app.use("/categories", categoryRoute);

//  ---------------------------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is runing on ${PORT}`);
})