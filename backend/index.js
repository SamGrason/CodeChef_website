require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully")
    })
    .catch((err) => {
        console.log(err)
    })
const db = mongoose.connection.useDb("CodeChef");

const recruitmentSchema = new mongoose.Schema({
    name: String,
    regno: String,
    mail: String,
    degree: String,
    branch: String,
    pnum: String,
    dept: String,
    exp: String,
    interest: String
});

const RecruitmentModel = db.model(
    "Recruitment",
    recruitmentSchema
);

app.post("/recruitment", async (req, res) => {

    try {

        const applicant = await RecruitmentModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Application submitted successfully",
            data: applicant
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to save application"
        });

    }

});

app.get("/recruitment", async (req, res) => {

    try {

        const applicants = await RecruitmentModel.find();

        res.status(200).json(applicants);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch applicants"
        });

    }

});

app.get("/", (req, res) => {
    res.send("Backend is live !!!");
});

app.listen(5000, () => {
    console.log("Server is Running on Port 5000");
});