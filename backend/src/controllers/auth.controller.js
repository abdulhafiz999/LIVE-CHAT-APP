import User from "../models/user.model.js";


export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
  if (password.lenght < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters"})
  }

  const  user = await User.findOne({email})

  if (user) return res.status(400).json({ message: "Email already exist"})

    salt

    //hashpassword
  } catch (error) {
    
  }
}

export const login = (req, res) => {
  res.respond("login route");
};

export const logout = (req, res) => {
  res.respond("logout route");
};

// export const signup = (req, res) => {
//   res.respond("signup route");
// };
