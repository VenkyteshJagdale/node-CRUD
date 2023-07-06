const db = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET_KEY = 'gfg_jwt_secret_key';
const auth = require("./authentication");

// create main model
const User = db.users;

// create user
const addUser = async (req, res) => {
  // validate request
  if (!req.body.Name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // create a user
  let info = {
    Name: req.body.Name,
    email: req.body.email,
    password: req.body.password
  };

  // save user in the database
  try {
    const user = await User.create(info);
    res.status(200).send(user);
    console.log(user);
  } catch (err) {
    res.status(500).json({ error: 'Error occurred while creating the user' });
  }
};

// update a user
const updateUser = async (req, res) => {
  let id = req.params.id;
  const user = await User.update(req.body, { where: { id: id } });
  if (!user) {
    console.error('Error updating user information:', error);
    res.status(500).json({ error: 'Failed to update user information' });
  } else {
    res.json({statusCode:200, message: 'User information updated successfully' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email:email } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY, { expiresIn: '1h' })
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  addUser,
  updateUser,
  loginUser
};
