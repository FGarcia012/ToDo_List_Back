import Task from './task.model.js';

export const addTask = async (req, res) => {
    try {
        const data = req.body;

        const task = await Task.create(data);

        return res.status(201).json({
            success: true,
            message: 'Task added successfully',
            task
        });
    }catch(err){
        return res.status(500).json({
            message: 'Error adding task',
            error: err.message
        });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ state: true });

        return res.status(200).json({
            success: true,
            message: 'Tasks listed successfully',
            tasks
        });
    }catch(err){
        return res.status(500).json({
            message: 'Error getting tasks',
            error: err.message
        });
    }
};

export const getTask = async (req, res) => {
    try {
        const { tid } = req.params;

        const task = await Task.findById(tid);

        if (!task) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Task found successfully',
            task
        });
    }catch(err){
        return res.status(500).json({
            message: 'Error getting task',
            error: err.message
        });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { tid } = req.params;
        const data = req.body;

        const task = await Task.findByIdAndUpdate(tid, data, { new: true });

        if (!task) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            task
        });
    }catch(err){
        return res.status(500).json({
            message: 'Error updating task',
            error: err.message
        });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { tid } = req.params;

        const task = await Task.findByIdAndUpdate(tid, { state: false }, { new: true });

        if (!task) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Task deleted successfully',
            task
        });
    }catch(err){
        return res.status(500).json({
            message: 'Error deleting task',
            error: err.message
        });
    }
};
