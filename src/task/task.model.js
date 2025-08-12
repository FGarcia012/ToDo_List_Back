import { model, Schema } from 'mongoose';

const taskSchema = Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    status: {
        type: String,
        enum: ['Incomplete', 'Complete'],
        default: 'Incomplete'
    },
    state: {
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timestamps: true
});

taskSchema.methods.toJSON = function() {
    const { __v, _id, ...task } = this.toObject();
    task.tid = _id;
    return task;
}

export default model('Task', taskSchema)