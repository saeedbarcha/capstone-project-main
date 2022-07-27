const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Parse = require('parse/node')
const crypto = require('crypto')
const {PARSE_APP_ID, PARSE_JAVASCRIPT_KEY} = require('./config')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())


Parse.initialize(PARSE_APP_ID, PARSE_JAVASCRIPT_KEY)
Parse.serverURL = "https://parseapi.back4app.com"

app.post('/register', async (req, res) => {
  let user = new Parse.User(req.body)
  console.log('user: ', user);
  console.log('req.body: ', req.body);

  try {
      await user.signUp()
      res.status(201)    
      res.send({"user" : user})
  } catch (error) {
      res.status(400)
      res.send({"error" : "Failed to create user: " + error })
  }
})

////////////////////////////////////////
// users update api
app.post('/createUser', async (req, res) => {
  let { username, email, country, language, description, skill, category,  password } = req.body;
  var User = Parse.Object.extend("User");
  const user = new User();
    user.set('username', username);
    user.set('email',  email);
    user.set('country', country);
    user.set('language', language);
    user.set('description', description);
    user.set('skill', skill);
    user.set('category', category);
    user.set('password', password);
    try {
      let userResult = await user.signUp();
      console.log('User signed up', userResult);
      res.send("created user successfully")
    } catch (error) {
      console.error('Error while signing up user', error);
    }
  })

   //get the users 
app.get('/getUser', async (req, res) => {
  const query = new Parse.Query("User");
      try {
      const userdata = await query.find();
      res.send(userdata)
      } catch (error) {
        res.send(error)
      }
  })
  

  /////////////////////////////////
  //update users by their id
app.patch('/update/users/:id', async(req, res) =>{
  let { username, email, country, language, description, skill, category,  password } = req.body;
  var Mentor = Parse.Object.extend("User");
  // var Mentor =new Parse.Mentor();
  const my = new Mentor();
 my.set("username" , username);
 my.set("email", email);
 my.set("country", country);
 my.set("language", language);
 my.set("description", description);
 my.set("skill", skill);
 my.set("category", category);
 my.set("password", password);
 try{
  const result = await my.save();
  res.send('updated')
  console.log('okay')
 }catch(err){
  console.log(err)
 }
})

/////////////////////////////////////////// -> 
// login -> 
app.post('/login', async (req, res) => {
  try {
    const user = await Parse.User.logIn(req.body.username, req.body.password)
    res.send({"user" : user})
  } catch (error) {
    res.status(400)
    res.send({"error" : "Login failed: " + error })
  }
})
// Set up Linkedin OAuth here 
var router = express.Router();
const request = require('superagent');
const { User } = require('parse/node')

router.get('/profile', function(req, res, next){
  requestAccessToken(req.body.code, req.query.state)

  .then(response => {
    requestProfile(response.body.access_token)
    .then(response =>{
      console.log('response: ', response.body);

      res.render('profile', {profile: response.body})
    } );
  })
  .catch((error) => {
    res.status(500).send(`${error}`)
  })
})

function requestAccessToken(code, state){
  return request.post('https://www.linkedin.com/oauth/v2/accessToken')
    .send('grant_type=authorization_code')
    .send('redirect_uri= http://localhost:3000/profile')
    .send('client_id=86bj0k3tnixpok')
    .send('client_secret=9XSEs7KoTrAeu78b')
    .send(`code=${code}`)
    .send(`state=${state}`)
}

function requestProfile(token) {
  return request.get('https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))')
  .set('Authorization', `Bearer ${token}`)
}
module.exports = app;
