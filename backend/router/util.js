const multer = require("multer");
const express = require("express");
const router = express.Router();
require("dotenv").config();


// initialize multer
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./static/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const uploader = multer({ storage: fileStorage });



router.post("/uploadfile", uploader.single("myfile"), (req, res) => {
    res.json({ status: "success" });
});





module.exports = router;