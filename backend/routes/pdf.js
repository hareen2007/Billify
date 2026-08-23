const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const Document = require("../models/doc");

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024 // 10 MB
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "application/pdf") {
            cb(null, true);
        } else {
            cb(new Error("Only PDF files are allowed"));
        }
    }
});

router.post("/upload-pdf", upload.single("pdf"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "No PDF uploaded"
            });
        }

        // Parse PDF
        const data = await pdfParse(req.file.buffer);

        // Store extracted text in MongoDB
        const document = await Document.create({
            fileName: req.file.originalname,
            text: data.text
        });

        res.status(201).json({
            message: "PDF parsed and stored successfully",
            documentId: document._id,
            fileName: document.fileName
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to process PDF",
            error: error.message
        });
    }
});

module.exports = router;