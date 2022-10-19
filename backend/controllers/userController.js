import userModel from "../models/userModel";

// log user in
export const loginUser = async (req, res) => {
  res.json({ message: "login user" });
};

// signup user
export const signupUser = async (req, res) => {
  res.json({ message: "signup user" });
};
