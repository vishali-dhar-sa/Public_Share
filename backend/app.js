var express = require("express");
app = express();
bodyParser = require("body-parser");
cors=require('cors');
mongoose = require("mongoose");
User = require('./model/user');


mongoose.connect("mongodb://localhost/publicshare_app");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
    }
    
    app.use(cors(corsOptions))



app.post('/api/signup',(req, res) => {
    console.log(req.body);
    var email1 = req.body.email;
    var password1 = req.body.password;

    var Userdata = {
        email:email1,
        password:password1
    }

    User.create(Userdata, function(err, res){
        if (err) {
            console.log(err)
        } else {
            console.log(res)
        }

    })
})    

app.post('/api/login',(req, res) => {
    var email1 = req.body.email;
    var password1 = req.body.password;

    var Userdata = {
        email:email1,
        password:password1
    }

    User.findOne({email : email1}, {password : password1}).exec(function(err,data){
        if(err){
            console.log(err);
        }if(!data){
            console.log("Log in fail")
        }
        else{
                // console.log("log in successfull!")
                res.json(data);
              
                console.log("email" + email1 + "password" + password1);
        }
    });
})    
app.listen(8880, function () {
    console.log("server has started");
})