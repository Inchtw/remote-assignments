// bulid Web Server using express 
const express = require('express');

// 用bodyParser 把input用出來不然就要用.value
const bodyParser =require('body-parser');
const cookieParser =require('cookie-parser');



// set the port for control
const port = 3000;

const app = express();

// serve static assets in public folder
app.use(express.static('public'));

// npm install cookieParser to get cookie
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());



//assignment-1 

app.get('/',( req , res ) =>{
    res.send("Hello, My Server!");
});

//assignment-2  Build Backend API for Front-End

app.get('/getData',( req , res)=>{
    const { number } = req.query;
    if(!number){
        res.send("Lack of Parameter");
    }else if (!isNaN(number) && number>0){
        // type of number is string ---> need to parse
        const calculate_num=(1+parseInt(number)) * parseInt(number)/2;
        
        res.send(`here is the answer ${calculate_num}`) ;
    }else{
            res.send("Wrong Parameter")
    }

})

//assignment-4 HTTP Cookie 

// only use get

app.get("/trackName", (req, res) => {
    const myName = req.query.name;
    res.cookie('username', myName);
    res.redirect('/myName');
});

app.get('/myName', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.send(`<h2> Hey! ${name}  你好！</h2>`);
      } else {
        res.send(
            `<form action='/trackName' method="get">
                <label>請輸入你的大名 </label>
                    <input type="text", name="name" , id ="name">
                <button type="submit">Submit</button>
            </form>`
            );
      }
  });





app.listen(port);
