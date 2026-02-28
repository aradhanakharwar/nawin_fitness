import mongoose from "mongoose";

const HomePageSchema = new mongoose.Schema({
  heroSlides: [
    {
      image: String,
      subtitle: String,
      title: String,
      buttonText: String,
      buttonLink: String
    }
  ],

  whyChooseUs: [
    {
      icon: String,
      title: String,
      description: String
    }
  ],

  classes: [
    {
      category: String,
      name: String,
      image: String,
      link: String
    }
  ],

  workoutGallery: [
    {
      image: String
    }
  ],

  trainers: [
    {
      name: String,
      role: String,
      image: String
    }
  ]
});

export default mongoose.model("HomePage", HomePageSchema);