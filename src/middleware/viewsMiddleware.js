const connection = require("../database/connection");

const viewsMiddleware = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) res.locals.valid = true;
  else res.locals.valid = false;

  next();
};

module.exports = viewsMiddleware;
