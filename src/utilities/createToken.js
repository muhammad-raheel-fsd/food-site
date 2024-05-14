const jwt = require("jsonwebtoken");

const createToken = (
  payload,
  secret = "FOOD_SITE",
  expiry = 30 * 24 * 60 * 60
) => jwt.sign(payload, secret, { expiresIn: expiry });

module.exports = createToken;
