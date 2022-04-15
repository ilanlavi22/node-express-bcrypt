const User = require('../models/user');
const authController = require('../models/user');


// controller actions
module.exports.signup_get = (req, res) => {
  res.render('signup')
}

module.exports.login_get = (req, res) => {
  res.render('login')
}

module.exports.signup_post = async (req, res, next) => {
  const { name, email, password } = req.body;
  //console.log(email, password);
  //res.send('new signup')
  try {
    const user = await User.create({ name, email, password })
    res.status(201).json(user)
  }
  catch (error) {
    console.log(error)
    res.status(400).send('error:' + error)
  }
}

module.exports.login_post = async (req, res, next) => {
  const { name, email, password } = req.body;
  res.send('user login')
}

