//server.js
'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./model/comments');
var Commission = require('./model/commissions');

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;
mongoose.connect('mongodb://inyounghong:Feliciano7@ds151222.mlab.com:51222/comments-test');


//now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// API

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

router.route('/commissions')
    .get(function(req, res) {
        Commission.find(function(err, commission) {
            if (err)
                res.send(err);
            res.json(commission)
        });
    })

    .post(function(req, res) {
        var commission = new Commission();
        commission.username = req.body.username;
        commission.price = req.body.price;

        commission.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Commission successfully added!' });
        });
    });

router.route('/comments')
    // .get(function(req, res) {
    //     Comment.find(function(err, comments) {
    //         if (err)
    //             res.send(err);
    //         res.json(comments)
    //     });
    // })
    //
    // .post(function(req, res) {
    //     var comment = new Comment();
    //     //body parser lets us use the req.body
    //     comment.author = req.body.author;
    //     comment.text = req.body.text;
    //
    //     comment.save(function(err) {
    //         if (err)
    //             res.send(err);
    //         res.json({ message: 'Comment successfully added!' });
    //     });
    // });
  //Add this after our get and post routes
  //Adding a route to a specific comment based on the database ID
  router.route('/comments/:comment_id')
  //The put method gives us the chance to update our comment based on the ID passed to the route
   .put(function(req, res) {
     Comment.findById(req.params.comment_id, function(err, comment) {
       if (err)
         res.send(err);
       //setting the new author and text to whatever was changed. If nothing was changed
       // we will not alter the field.
       (req.body.author) ? comment.author = req.body.author : null;
       (req.body.text) ? comment.text = req.body.text : null;
       //save comment
       comment.save(function(err) {
         if (err)
           res.send(err);
         res.json({ message: 'Comment has been updated' });
       });
     });
   })
   //delete method for removing a comment from our database
   .delete(function(req, res) {
     //selects the comment by its ID, then removes it.
     Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
       if (err)
         res.send(err);
       res.json({ message: 'Comment has been deleted' })
     })
   });

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
