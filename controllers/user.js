const UserModel = require('models/user');
require('models/token');

const getList = async (username, pwd) => {
  const docs = await UserModel.find({ username, pwd });
  return docs;
};

const createuser = async (username, pwd) => {
  const doc = new UserModel({ username, pwd });
  await doc.save();
  return doc.id;
};

module.exports.createuser = createuser;
module.exports.getList = getList;
