let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with book model

let task = require('../models/tasks');

/* READ Operation */

router.get('/',(req,res,next)=>{
    task.find((err, taskmanager)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('task/tasklist',{
                title:'Task Manager', 
                taskmanager: taskmanager
            })
        }
    });
});

/* ADD Operation */
router.get('/add',(req,res,next)=>{
    res.render('task/add',{
        title:'Add a Task',
    })
});
/* Post route for processing*/
router.post('/add',(req,res,next)=>{
    let newtask = Task ({
        "Task":req.body.Task,
        "Assigned_date":req.body.Assigned_date,
        "Due_date":req.body.Due_date,
        "Details":req.body.Details
    })
    Task.create(newtask,(err,task) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/task/tasklist')
        }
    })
});
/* EDIT Operation */
router.get('/edit/:id',(req,res,next)=>{
    let id = req.params.id;
    Task.findById(id,(err,taskToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('task/edit',{title:'Edit your Task', task:taskToEdit});
        }
    });
});
/*Post route for displaying*/
router.post('/edit/:id',(req,res,next)=>{
    let id=req.params.id;
    let updateTask = task({
        "_id":id,
        "Task":req.body.Task,
        "Assigned_date":req.body.Assigned_date,
        "Due_date":req.body.Due_date,
        "Details":req.body.Details
    });
    Task.updateOne({_id:id},updateTask,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/task/tasklist');
        }
    });
});
/* DELETE Operation */
router.get('/delete/:id',(req,res,next)=>{
    let id =req.params.id;
    Task.remove({_id:id},(err)=> {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/task/tasklist');
        } 
    });
});
module.exports = router;