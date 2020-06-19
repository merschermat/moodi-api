var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ users: [{ name: 'Mateus', role: 'Creator' }] });
});

router.post('/login', function (req, res, next) {
  console.log(req.body)
  res.json({message:'ok'})
})

module.exports = router;
