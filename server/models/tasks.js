let mongoose = require('mongoose');
//creating a task model
let task_model = mongoose.Schema(
    {
        Task: String,
        Assigned_date: String,
        Due_date: String,
        Details: String
    },
    {
        collection: "taskmanager"
    }
);
module.exports = mongoose.model('Tasks', task_model);