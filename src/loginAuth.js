const passport = require('passport-local')
const express = require('express')

const app = express()

app.listen(4001, function() {
    console.log("node listening on port 4001" )
})

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));