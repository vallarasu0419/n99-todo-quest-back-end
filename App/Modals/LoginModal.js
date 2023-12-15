const pool = require("../Configuration/config");

const LoginModal = {};

LoginModal.login = (input, output) => {
  const username = input.query.email;
  const password = input.query.password;

  const sql = `SELECT * FROM user_details WHERE user_details.email = '${username}' && user_details.password = '${password}';`;
  try {
    pool.query(sql, function (err, result) {
      if (err) {
        console.log("error: ", err);
        output(err, null);
        return;
      }
      if (result.length) {
        if (result[0].password === password) {
          output(null, {
            name: result[0].name,
            userId: result[0].userId,
            email: result[0].email,
          });
        } else {
          output({ error: { description: "Check the password!" } }, null);
        }
      } else {
        output({ error: { description: "User name not Found!" } }, null);
      }
    });
  } catch (err) {
    throw err;
  }
};

LoginModal.postMessage = (input, output) => {
  const from = input.query.from;
  const to = input.query.to;
  const text = input.query.text;
  const time = input.query.time;
  const name = input.query.name;
  console.log("Model", input.query);

  const InsertMessage = `insert into message (from_user, to_user, message_text, date_time,user_name) values('${from}','${to}','${text}', '${time}','${name}')`;
  pool.query(InsertMessage, function (err, result) {
    console.log(err);
    if (err) output({ error: { description: err } }, null);
    else {
      output(null, { message: "Success" });
    }
  });
};

LoginModal.getMessage = (input, output) => {
  const getMessage = `SELECT * FROM message ORDER BY STR_TO_DATE(date_time, '%Y-%m-%dT%H:%i:%s') ASC`;

  pool.query(getMessage, function (err, result) {
    console.log(err);
    if (err) output({ error: { description: err } }, null);
    else {
      output(null, result);
    }
  });
};

LoginModal.deleteMessage = (input, output) => {
  const msgId = input.query.msgId;
  const deleteMessage = `DELETE FROM message WHERE message_id=${msgId};`;

  pool.query(deleteMessage, function (err, result) {
    console.log(err);
    if (err) output({ error: { description: err } }, null);
    else {
      output(null, { message: "Success" });
    }
  });
};

module.exports = LoginModal;
