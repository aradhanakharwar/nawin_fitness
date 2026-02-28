import asyncHandler from "../../middleware/asyncAwait.js";
import { validateEmail } from "../../middleware/validateFields.js";
import User from "../../models/User.js";
import bcrypt from "bcryptjs"

export const index = (req, res) => {
    res.render("index")
};

export const registerPage = (req, res) => {
    res.render("pages/adminAccess/adminRegister")
};

export const loginPage = (req, res) => {
    res.render("pages/adminAccess/adminLogin")
};

export const register = asyncHandler(async (req, res) => {
    console.log("api hit");

    const { email, password, userType = "Admin" } = req.body;

    if (!email, !password) {
        return res.status(400).send({ success: false, message: "Please fill required fields" })
    }

    const validEmail = validateEmail(email);
    const duplicateEmail = await User.findOne({ email });

    if (!validEmail) {
        return res.status(400).json({ success: false, message: "Email is not valid" })
    }

    if (duplicateEmail) {
        return res.status(400).send({ success: false, message: "Email already exist" })
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        email, password: hashPassword, userType
    });

    return res.status(200).send({ success: true, message: "Admin created successfully!", data: user });

});


export const login = asyncHandler(async (req, res) => {
    console.log("login hit");

    const { email, password } = req.body;

    const userData = await User.findOne({ email, userType: "Admin" });

    if (!userData) {
        return res.status(404).send({ success: false, message: "Admin not found" })
    }

    const encryptedPassword = await bcrypt.compare(password, userData.password);

    console.log(encryptedPassword);


    if (!encryptedPassword) {
        return res.status(400).send({ success: false, message: "Password is incorrect" });
    };

    //save session
    req.session.adminId = userData._id;

    return res.status(200).send({ success: true, message: "Login successfully!" });

})