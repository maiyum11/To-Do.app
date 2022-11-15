let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with book model

let Task = require('../models/tasks');

/* READ Operation */

router.get('/',(req,res,next)=>{
    Task.find((err, taskmanager)=>{
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
    Task.create(newtask,(err,Task) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/tasks')
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
            res.render('task/edit',{title:'Edit your Task', Task:taskToEdit});
        }
    });
});
/*Post route for displaying*/
router.post('/edit/:id',(req,res,next)=>{
    let id=req.params.id;
    let updateTask = Task({
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
            res.redirect('/tasks');
        }
    });
});
/*not working - check*/
/* DELETE Operation */
router.get('/delete/:id',(req,res,next)=>{
    let id =req.params.id;
    Task.deleteOne({_id:id},(err)=> {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/tasks');
        } 
    });
});
module.exports = router;