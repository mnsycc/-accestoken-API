const express = require('express');

const router = express.Router();
const userController = require('controllers/user');
const protectedRouteMw = require('controllers/auth/middleware');
const getAccesToken = require('controllers/auth/index');

const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, directory);
  },
  filename(req, file, cb) {
    cb(null, fileName);
  },
});
const upload = multer({ storage });

const Ajv = require('ajv');
const testSchema = require('schemas/routes/test');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/test2', upload.none(), async (req, res, next) => {
  const { body } = req;
  console.log(req.body);

  // Валидируем!
  const ajv = new Ajv();
  const validate = ajv.compile(testSchema);
  const valid = validate(body);

  if (!valid) {
    const { errors } = validate;

    const result = {
      status: 'invalid data',
      payload: { errors },
    };
    res.json(result);
    return;
  }

  const { createuser } = userController;
  const userid = await createuser(req.body.username, req.body.pwd);

  const token = getAccesToken(userid);
  console.log('token: ', token);
  res.cookie('token: ', token);
  res.json({
    message: 'ok',
  });
});


router.post('/vrf', protectedRouteMw, (req, res, next) => {
  res.json({
    message: 'Checked',
  });
});


module.exports = router;
