import express from "express";
import { index, loginPage, register, registerPage, login } from '../controllers/adminController/AuthController.js';
import { adminAuth, redirectIfLoggedIn } from "../middleware/authentication.js";
import { home } from "../controllers/adminController/HomeController.js";
// import "../views/common/main.js"

const router = express.Router();

//auth controller
router.get('/', adminAuth, index);
router.get('/register', redirectIfLoggedIn, registerPage)
router.get('/login', redirectIfLoggedIn, loginPage)
router.post('/register', register)
router.post('/login', login)


//home controller
router.get('/home', adminAuth, home)

export default router;