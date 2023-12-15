var mysql = require("mysql");

var pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vallarasu@123",
  database: "DiscussHub",
  port: 3306,
  multipleStatements: true,
});

pool.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  try {
    let createUser = `CREATE TABLE IF NOT EXISTS user_details (
    userId INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (userId)
  )`;

    pool.query(createUser, function (err, results, fields) {
      if (err) {
        console.log(err.message);
      }
      let createUserData = `INSERT INTO user_details (userId, name, email, password) VALUES 
      (1,"user1", "user1@gmail.com", "123456"),
      (2,"user2", "user2@gmail.com", "123456")`;

      pool.query(createUserData, function (err, results, fields) {
        if (err) {
          console.log(err.message);
        }
      });
    });

    const createMessage = `CREATE TABLE if not exists message (
    message_id int NOT NULL AUTO_INCREMENT,
    from_user varchar(256) NOT NULL,
    to_user varchar(256) NOT NULL,
    message_text varchar(1000) NOT NULL,
    date_time varchar(50) NOT NULL,
    user_name varchar(256) NOT NULL,
    PRIMARY KEY (message_id)
  ) 
  `;
    pool.query(createMessage, function (err, results, fields) {
      if (err) {
        console.log(err.message);
      }
    });
  } catch (e) {
    throw e;
  }
});

module.exports = pool;
