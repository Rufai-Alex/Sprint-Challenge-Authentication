const jwt = require("jsonwebtoken");

const { jwtSecret } = require("./secret.js");

/*
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Must be an authorized user" });
      } else {
        req.user = decodedToken;
      }
      next();
    });
  } else {
    res.status(401).json({ message: "Must be an authorized user" });
  }
};
