const connection = require("../database/connection");
const createCookie = require("../utilities/createCookie");
const createToken = require("../utilities/createToken");

class Controller {
  static get_index = async (req, res) => {
    try {
      res.render("templates/index", { title: "Home" });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };

  static get_about = async (req, res) => {
    try {
      res.render("templates/about", { title: "About" });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };

  static get_menu = async (req, res) => {
    try {
      connection.query("SELECT * FROM products", (err, result) => {
        if (err) console.log(err);
        else {
          res.render("templates/menu", { title: "Menu", response: result });
        }
      });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };

  static get_contact = async (req, res) => {
    try {
      res.render("templates/contact", { title: "Contact" });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };

  static get_login = async (req, res) => {
    try {
      res.render("templates/login", { title: "Login" });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };

  static get_signup = async (req, res) => {
    try {
      res.render("templates/signup", { title: "Login" });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };

  static get_product_details = async (req, res) => {
    try {
      const selectQuery = `SELECT * FROM products WHERE product_id = ${req.params.id}`;
      console.log(selectQuery);
      connection.query(selectQuery, (err, result) => {
        if (err) {
          res.json({ message: err.message });
        } else {
          res.render("./templates/details", {
            title: "Details",
            response: result[0],
          });
        }
      });
    } catch (error) {}
  };

  static post_signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const insertQuery = `INSERT INTO users VALUES ('','${username}' , '${email}', '${password}')`;
      connection.query(insertQuery, (err, result) => {
        if (err) {
          res.json({ message: err.message });
        } else {
          res.json({
            redirect: "/login",
          });
        }
      });
    } catch (error) {}
  };

  static post_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const insertQuery = `SELECT * FROM users WHERE email = '${email}'`;
      connection.query(insertQuery, (err, result) => {
        if (err) {
          res.json({ message: err.message });
        } else if (result.length == 0) {
          res.json({
            redirect: "/login",
          });
        } else {
          if (result[0].password === password) {
            const token = createToken({ email: result[0].email });
            createCookie(res, token);
            res.json({
              redirect: "/menu",
            });
          } else {
            res.json({
              message: "Invalid password",
            });
          }
        }
      });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };

  static get_logout = async (req, res) => {
    try {
      createCookie(res, "", 1);
      res.json({
        redirect: "/login",
      });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };
}

module.exports = Controller;
