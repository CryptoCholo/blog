/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

require('dotenv').config();

exports.signup = async (req, res) => {

    const user = await UserModel.findOne({ username: req.user.username})

    user.first_name = req.body.first_name
    user.last_name = req.body.last_name
    user.password= req.body.password

    await user.save()

    user.password = undefined;

    res.status(201).json({
        message: 'Signup successful',
        user: user
    });
}

exports.login = (req, res, { err, user, info}) => {

    if (!user) {
        return res.json({ message: 'Username or password is incorrect'})
    }

    req.login(user, { session: false },
        async (error) => {
            if (error) return res.status(400).json(error)

            const body = { _id: user._id, username: user.username };
           
            const token = jwt.sign({ user: body }, process.env.JWT_SECRET, { expiresIn: '1h' });
                
            return res.status(200).json({info, token});
        }
    );
}