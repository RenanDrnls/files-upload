const express = require("express");
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const router =  express.Router();

const imagePostPath = path.join(__dirname, "../public/assets/");

const upload = multer({
    storage: multer.diskStorage({
        destination: (request, file, cb) => {
            cb(null, imagePostPath);
        },
        filename: (request, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    })
}).single("post-image");

router.post("/insert-post", (request, response) => {
    upload(request, response, (error) => {
        if(error) {
            response.status(400).send("Something went wrong!" + error);
        }
        response.send(request.file);
    });
});

module.exports = router;