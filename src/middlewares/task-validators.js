import { body, param } from 'express-validator';
import { taskExists } from '../helpers/db-validators.js';
import { validateField } from './validate-field.js';
import { handleErrors } from './handle-erros.js';

export const addTaskValidator = [
    body('title').notEmpty().withMessage('Title is required'),
    validateField,
    handleErrors
];

export const updateTaskValidator = [
    param('tid').notEmpty().withMessage('Invalid task ID').custom(taskExists),
    body('title').optional().notEmpty().withMessage('Title is required'),
    validateField,
    handleErrors
];

export const deleteTaskValidator = [
    param('tid').notEmpty().withMessage('Invalid task ID'),
    param('tid').custom(taskExists),
    validateField,
    handleErrors
];

export const getTaskValidator = [
    param('tid').notEmpty().withMessage('Invalid task ID'),
    param('tid').custom(taskExists),
    validateField,
    handleErrors
];