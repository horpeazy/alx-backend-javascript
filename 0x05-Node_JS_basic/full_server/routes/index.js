import express from "express";
import AppController from "../controllers/AppController.js";
import StudentsController from "../controllers/StudentsController.js";


const router = express.Router()

router.route("/").get(AppController.getHomepage);
router.route("/students").get(StudentsController.getAllStudents);
router.route("/students/:major").get(StudentsController.getAllStudentsByMajor);

export default router;
