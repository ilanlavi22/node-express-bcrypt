// controller actions
module.exports.signup_get = (req, res) => {
  res.render('signup')
}

module.exports.login_get = (req, res) => {
  res.render('login')
}

module.exports.signup_post = async (req, res, next) => {
  res.send('new signup')
}

module.exports.login_post = async (req, res, next) => {
  res.send('user login')
}

