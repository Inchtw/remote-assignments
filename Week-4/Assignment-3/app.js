const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASSWORD } = process.env;

app.use('/static',express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const con = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: "assignment"
  });  


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query( "SELECT * FROM user", function (err, result) {
      if (err) throw err;
    //   console.log("Result: " + result[0].user_name);
    //   console.log(typeof result);
    //   console.dir(result);
    //   console.log(typeof body);
    });
  });



app.get('/',(req,res)=>{
    const name = req.username
    res.sendfile('index.html');
    
})

app.post("/signin", (req, res)=>{
    // let {user_name} = req.body;
    let {email} = req.body;
    let {password} = req.body; 
    let sql = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}';`
    con.query( sql, (err, result) => {
        if (err) throw err;
        if (result[0] == undefined){
            res.send("E-mail or Password Wrong.");
        }else{
            // res.send(` Hello ${result[0].user_name}`)
            res.redirect('/member');
        }
    })
    console.log("signin!")
    

})

app.post("/signup", (req, res)=> {
    let {user_name} = req.body;
    let {email} = req.body;
    let {password} = req.body;   
    let sql = `INSERT INTO user (user_name, email , password ) VALUES ('${user_name}', '${email}','${password}');`
    con.query( sql, (err, result) => {
        if (err){
            res.send("User or e-mail has been used. Please try it again.");
        }
        else{
            // res.send(` Sign up successed ${user_name}! `)
            res.redirect('/member');
        }
    })
    console.log("signup!")

})


app.get('/member',(req,res)=>{
    res.send(`<h1 class = "center"> Log In Success!  Welcome! </h1>`);

})



app.listen(3000,
    console.log(" port connected!"));


