import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const saltRounds = 10;

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// log user in
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    const correctPassword =
      bcrypt.compareSync(password, user.password) || false;
    if (correctPassword === true) {
      const accessToken = createToken(user._id);
      res.status(200).json({
        message: "User logged in",
        success: true,
        payload: { email, accessToken },
      });
    } else {
      res.staus(400).json({
        message: "Incorrect email or password",
        success: false,
        payload: null,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Incorrect email or password",
      success: false,
      payload: null,
    });
  }
};

// signup user
export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw Error("All fields must be filled");
    }
    // see if email address is valid
    else if (!validator.isEmail(email)) {
      throw Error("Email is not valid");
      // see if password is valid
    } else if (!validator.isStrongPassword(password)) {
      throw Error(
        "Invalid password.  Password must be 8 characters long and contain a mix of at least one lowercase letter, one uppercase letter, one number and one symbol."
      );
      // if both email and password are valid
    } else {
      // see if a user with the same email address already exists in the database
      const user = await userModel.findOne({
        email: validator.normalizeEmail(email),
      });

      // if the user does not already exist
      if (!user) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await userModel.create({
          email: validator.normalizeEmail(email),
          password: hash,
        });
        const accessToken = createToken(newUser._id);
        res.status(201).json({
          message: "User created",
          success: true,
          payload: { email, accessToken },
        });

        // if user does exist
      } else {
        res.status(400).json({
          message: "Email address already exists",
          success: false,
          payload: null,
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      payload: null,
    });
  }
};
