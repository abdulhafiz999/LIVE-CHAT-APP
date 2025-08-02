// import jwt from "jsonwebtoken"


// export const generateToken = (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn:"7d"
  
//   });

//   res.cookie("jwt", token, {
//     maxAge: 7 * 24 * 60 * 60 * 1000, // MS
//     httpOnly: true, // prevent XSS attacks cross-site scripting attacks
//     sameSite: "strict", // CSRF attacks cross-site request forgery attacks
//     secure: process.env.NODE_ENV !== "development",
//   });

//   return token;
// }

// import jwt from "jsonwebtoken";

// export const generateToken = (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "7d",
//   });

//   res.cookie("jwt", token, {
//     maxAge: 7 * 24 * 60 * 60 * 1000, // MS
//     httpOnly: true, // prevent XSS attacks cross-site scripting attacks
//     sameSite: process.env.NODE_ENV === "development" ? "none" : "strict", // Changed this
//     secure: true, // Changed this - must be true when sameSite is "none"
//   });

//   return token;
// };

import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    sameSite: "none", // Required for cross-origin requests
    secure: true, // Required when sameSite is "none"
    domain: process.env.NODE_ENV === "production" ? ".onrender.com" : undefined, // Add this
  });

  return token;
};