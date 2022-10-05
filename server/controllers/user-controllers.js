import User from '../models/User.js';

export const getUser = async (req, res) => {
  try {
      const users = await User.find();

      res.status(200).json(users)
  } catch (error) {
      res.status(404).json({ message: error.message });
  }

}

export const createUser = async ({ body }, res) => {
  User.create(body)
  .then(dbUserData => res.json(dbUserData))
  .catch(err => res.status(400).json(err));
  //const newUser = new User(user);

  /*try{
      await newUser.save();

      res.status(201).json(newUser);
  } .catch (error) {
      res.status(409).json({ message: error.message});
  }*/
}