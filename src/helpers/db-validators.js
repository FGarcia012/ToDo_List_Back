import Task from '../task/task.model.js';

export const taskExists = async (tid = ' ') => {
    const existe = await Task.findById(tid);
    if (!existe) {
        throw new Error(`Task with id ${tid} does not exist`);
    }
};