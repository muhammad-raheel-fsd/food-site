const mysql = require('mysql');
exports.handler = (event, context, callback) => {
  const { CustomerId, Campaign } = event;

  const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DB,
  });

  connection.connect();

  connection.query(
    `SELECT SKU FROM HIGHLIGHTS WHERE (CustomerId = '${CustomerId}' AND Campaign = '${Campaign}') OR (CustomerId = '1' AND Campaign = '${Campaign}')`,
    function (error, results, fields) {
      if (error) {
        console.error('[connection.query]error: ' + error);
        return;
      }

      callback(null, results);
    }
  );

  connection.end(function (err) {
    if (err) {
      connection.destroy();
      return;
    }
    console.log('connection ended');
  });
};
