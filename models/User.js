const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String
});

mongoose.model('users', userSchema);



// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const keys = require('../config/keys');
// const mongoose = require('mongoose');
//
// const userSchema = new mongoose.Schema({
//   googleId: String,
//   name: String
// });
//
// const User = mongoose.model('users', userSchema);
// // const User = mongoose.model('users');
//
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: 'http://localhost:5000/auth/google/callback'
//     },
//     (accessToken, refreshToken, profile, done) => {
//       new User({ googleId: profile.id}).save();
//     }
//   )
// );
