import { generateToken } from "../lib/utils.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";

const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters long" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
    }

    return res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      profilePic: newUser.profilePic,
    });
  } catch (error) {}
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findById({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateToken(user._id, res);

    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Some error occurred", error.message);
    return res.status(500).json({ message: "Some error occurred" });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie(jwt, "", { maxAge: 0 });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Some error occurred", error.message);
    return res.status(500).json({ message: "Some error occurred" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;

    if (!profilePic) {
      return res.status(400).json({ message: "Profile picture is required" });
    }

    const uploadPicture = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        profilePic: uploadPicture.secure_url,
      },
      {
        new: true,
      }
    );

    if (!updatedUser) {
      return res.status(400).json({ message: "Profile picture upload failed" });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Some error occurred", error.message);
    return res.status(500).json({ message: "Some error occurred" });
  }
};

export { login, logout, signup, updateProfile };
