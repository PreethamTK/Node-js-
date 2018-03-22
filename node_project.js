
var express = require('express');
var    http = require('http');
var  fs = require('fs');
var formidable= require('express-formidable');
var session= require('express-session');

var app = express();
app.use(formidable());
app.use(session({secret: "We lost to SEVILLA ! "}));

app.get("/", function (req, res) {

    if (req.session.user) {
        // res.send("Welcome " + req.session.user.username + "<br>" + "<a href='/logout'>logout</a>");
        fs.readFile('./files/home.html', function (err, html) {
            if (err) {
                throw err;
            }

                res.writeHeader(200, {"Content-Type": "text/html"});
                res.write(html);
                res.end();

        });    // res.send("Welcome "  + "<br>" + "<a href='/logout'>logout</a>");


    } else {
      res.redirect("/login")
        // res.send("<a href='/login'> Login</a>" + "<br>" + "<a href='/signup'> Sign Up</a>");
    }
});

app.get("/course", function (req, res) {

    if (req.session.user) {
        // res.send("Welcome " + req.session.user.username + "<br>" + "<a href='/logout'>logout</a>");
        fs.readFile('./files/courses.html', function (err, html) {
            if (err) {
                throw err;
            }

                res.writeHeader(200, {"Content-Type": "text/html"});
                res.write(html);
                res.end();

        });    // res.send("Welcome "  + "<br>" + "<a href='/logout'>logout</a>");


    } else {
      res.redirect("/login")
        // res.send("<a href='/login'> Login</a>" + "<br>" + "<a href='/signup'> Sign Up</a>");
    }

});
app.get("/profile", function (req, res) {

    if (req.session.user) {
        // res.send("Welcome " + req.session.user.username + "<br>" + "<a href='/logout'>logout</a>");
        fs.readFile('./files/profile.html', function (err, html) {
            if (err) {
                throw err;
            }

                res.writeHeader(200, {"Content-Type": "text/html"});
                res.write(html);
                res.end();

        });    // res.send("Welcome "  + "<br>" + "<a href='/logout'>logout</a>");


    } else {
      res.redirect("/login")
        // res.send("<a href='/login'> Login</a>" + "<br>" + "<a href='/signup'> Sign Up</a>");
    }

});


app.get("/login", function (req, res) {
    // res.render("files/login.html");
    fs.readFile('./files/login.html', function (err, html) {
        if (err) {
            throw err;
        }

            res.writeHeader(200, {"Content-Type": "text/html"});
            res.write(html);
            res.end();

    });    // res.send("Welcome "  + "<br>" + "<a href='/logout'>logout</a>");


});

app.post("/login", function (req, res) {

var roll=req.fields.username;
var password=req.fields.password;

if(roll==password)
{
  req.session.user=roll;
  res.redirect('/');
}

else {
  res.redirect('/login');
}


});

app.get('/logout', function (req, res) {
    req.session.destroy(function () {
        res.redirect('/login');
    });
});

app.get('/courses', function (req, res) {
    res.send('course  page of '+ req.session.user.username +'<br>'+' click to <a href="/logout">logout</a>');
});
app.listen(1752);
