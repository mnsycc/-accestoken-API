const path = require('path');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const generalSchema = new Schema({ // Схема
  username: {
    type: Schema.Types.String,
    default: '',
    minLength: 0,
    maxLength: 15,
  },
  pwd: {
    type: Schema.Types.Mixed,
    default: '',
    minLength: 0,
    maxLength: 20,
  },
  tokenId: {
    type: Schema.Types.ObjectId,
    ref: 'token',
  },
}, {
  timestamps:
      { createdAt: true },
}); // Настройки схемы, в данном случае добавить поле createdAt, updatedAt (когда создали документ, когда обновили документ)


const modelname = path.basename(__filename, '.js'); // Название модели совпадает с названием файла модели. Тут мы получаем имя файла без расширения .js
const model = mongoose.model(modelname, generalSchema); // собственно создаем модель
module.exports = model;
