const Student_signup = require("../models/student");

async function IpReqRes(req, res, next) {
  await Student_signup.create({
    IpAddress: req.ip,
  });
  next();
}
module.exports = {
  IpReqRes,
};
