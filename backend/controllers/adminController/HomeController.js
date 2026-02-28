import asyncHandler from "../../middleware/asyncAwait.js";
import Home from "../../models/Home.js";

export const home = (req, res) => {
    res.render("pages/home/home");
};


export const addHeroSlide = asyncHandler(async (req, res) => {
    try {
        const { title, subtitle, buttonText, buttonLink } = req.body;

        if (!title || !subtitle || !req.file) {
            return res.status(400).json({
                success: false,
                message: "Title, subtitle and image are required"
            });
        }

        let home = await Home.findOne();

        if (!home) {
            home = new Home({ heroSlides: [] });
        }

        const heroSlide = {
            title,
            subtitle,
            buttonText,
            buttonLink,
            image: req.file.filename
        };

        home.heroSlides.push(heroSlide);
        await home.save();

        res.status(200).json({
            success: true,
            message: "Hero slide added successfully",
            data: heroSlide
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
});

