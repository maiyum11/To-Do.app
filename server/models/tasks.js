let mongoose = require('mongoose');
//creating a task model
let task_model = mongoose.Schema(
    {
        task: String,
        assigneddate: String,
        duedate: String,
        details: String
    },
    {
        collection: "taskmanager"
    }
);
module.exports = mongoose.model('Tasks', task_model);