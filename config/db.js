// конфигурация базы данных
module.exports = {
  db: {
    uri: 'mongodb://localhost:27017/usertest',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
