const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: 'http://localhost:5000/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({googleId: profile.id})
        .then((existingUser) => {
          if(existingUser) {
            // we already have a record with a given profile id.
            done(null, existingUser);
          }else{
            // create a new user.
            new User({ googleId: profile.id})
              .save()
              .then(user => {
                done(null, user);
              });
          }
        })
        .catch(() => {

        })

    }
  )
);
