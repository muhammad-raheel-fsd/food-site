const createCookie = (res, token, expiry = 30 * 24 * 60 * 60 * 1000) =>
  res.cookie("jwt", token, { httpOnly: true, maxAge: expiry });

module.exports = createCookie;
