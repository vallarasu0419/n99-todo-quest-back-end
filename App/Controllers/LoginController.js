const LoginModal = require("../Modals/LoginModal");

exports.Login = (req, res) => {
  try {
    LoginModal.login(req, (err, data) => {
      if (err) res.status(401).send(err.error);
      else res.send(data);
    });
  } catch (e) {
    throw e;
  }
};

exports.postMessage = (req, res) => {
  try {
    if (!req) {
      res.status(400).send({ message: "Check data" });
    } else {
      LoginModal.postMessage(req, (err, data) => {
        if (err) res.status(500).send(err.error);
        else res.send(data);
      });
    }
  } catch (e) {
    throw e;
  }
};

exports.getMessage = (req, res) => {
  try {
    LoginModal.getMessage(req, (err, data) => {
      if (err) res.status(500).send(err.error);
      else res.send(data);
    });
  } catch (e) {
    throw e;
  }
};

exports.deleteMessage = (req, res) => {
  try {
    LoginModal.deleteMessage(req, (err, data) => {
      if (err) res.status(500).send(err.error);
      else res.send(data);
    });
  } catch (e) {
    throw e;
  }
};
