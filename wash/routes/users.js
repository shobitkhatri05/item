const express = require('express');
 
const mongoose = require('mongoose');
const app = express();
const User = require('../model/wash');
const router = express.Router();
 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  });
 
router.get('/', function(req, res) {
    User.find(function(err, data) {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})
 
router.post('/addData', function(req, res) {
        // console.log("working")
        const name = req.body.name
        const last = req.body.last
        const address = req.body.address
        const mobile = req.body.mobile
        const email = req.body.email
        const city = req.body.city
        
        
        new User({
            name: name,
            last: last,
            address: address,
            mobile: mobile,
            email: email,
            city: city
  
        }).save(function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
                res.json(data)
            }
        })
    })
    //////////////////////////////////////////////////////updating data///////////////////////////////////
// router.post('/update/:id', (req, res, next) => {
//     const id = req.params.id;
//     let UserUpdate = {
//         _id: id,
//         name: req.body.name,
//         subject: req.body.subject,
//         phone: req.body.phone,
//         email: req.body.email,
//         message: req.body.message
//     };
//     User.findOneAndUpdate({ _id: id }, UserUpdate, (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             // console.log(data)
//             res.json(data)
//         }
 
//     })
// })
 
/////////////////edit
router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    User.findById(id, function(err, data) {
        res.json(data);
    })
})
 
//////////////////////////////////////////////////delete data///////////////////////////////////////////////
// router.get('/delete/:id', (req, res) => {
//     let id = req.params.id
//     User.findOneAndRemove(id, (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             res.json(data)
//             console.log(data)
//         }
//     })
// })
module.exports = router;