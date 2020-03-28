const bc = require("bcryptjs");
const router = require("express").Router();

router.post("/register", (req, res) => {
  // implement registration

  const { username, password } = req.body;
  const hashPassword = bc.hashSync(password, 10);
  console.log("register endpoint");
});

router.post("/login", (req, res) => {
  // implement login
  console.log(" login endpoint");
});

module.exports = router;
