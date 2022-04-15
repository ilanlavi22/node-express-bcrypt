const User = require('../models/user');

// handle errors function
const handleErrors = (error) => {
  //console.log(error.message, error.code)
  let errors = { name: '', email: '', password: '' }

  // duplicate email error
  if (error.code === 11000) {
    errors.email = 'That email is already registered'
    return errors
  }

  // validation errors
  if (error.message.includes('user validation failed')) {
    console.log(error);
    Object.values(error.errors).forEach(({ properties }) => {
      //console.log(val);
      //console.log(properties);
      errors[properties.path] = properties.message;
    });
  }
  return errors
}

// controller actions
module.exports.signup_get = (req, res) => {
  res.render('signup')
}

module.exports.login_get = (req, res) => {
  res.render('login')
}

module.exports.signup_post = async (req, res) => {
  const { name, email, password } = req.body;
  //res.send('new signup')
  try {
    const user = await User.create({ name, email, password })
    res.status(201).json(user)
  }
  catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
}

module.exports.login_post = async (req, res, next) => {
  const { email, password } = req.body;
  res.send('user login');
  // User.findOne({ email })
  //   .then((user) => {
  //     if (user === null) {
  //       console.log('null')
  //       throw new Error('There is no user with that email.')
  //     } else {
  //       console.log(bcryptjs.compare(password, user.password));
  //       return bcryptjs.compare(password, user.password);
  //     }
  //   })
  //   .catch((error) => {
  //     next()
  //   })
}

