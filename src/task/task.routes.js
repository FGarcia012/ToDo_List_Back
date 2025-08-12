import { Router } from 'express';
import { addTask, getTasks, getTask, updateTask, deleteTask } from './task.controller.js';
import { addTaskValidator, updateTaskValidator, deleteTaskValidator, getTaskValidator } from '..//middlewares/task-validators.js';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         tid:
 *           type: string
 *           description: The auto-generated id of the task
 *         title:
 *           type: string
 *           description: The title of the task
 *         status:
 *           type: string
 *           enum: [Incomplete, Complete]
 *           default: Incomplete
 *           description: The status of the task
 *         state:
 *           type: boolean
 *           default: true
 *           description: The state of the task (active/inactive)
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the task
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date of the task
 *       example:
 *         tid: 64f8a123b123456789012345
 *         title: Complete project documentation
 *         status: Incomplete
 *         state: true
 *         createdAt: 2023-09-06T10:30:00.000Z
 *         updatedAt: 2023-09-06T10:30:00.000Z
 *
 *     TaskInput:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the task
 *         status:
 *           type: string
 *           enum: [Incomplete, Complete]
 *           description: The status of the task
 *       example:
 *         title: Complete project documentation
 *         status: Incomplete
 *
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         error:
 *           type: string
 */

/**
 * @swagger
 * /addTask:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskInput'
 *     responses:
 *       201:
 *         description: Task added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Task added successfully
 *                 task:
 *                   $ref: '#/components/schemas/Task'
 *       400:
 *         description: Bad request - Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/addTask', addTaskValidator, addTask);

/**
 * @swagger
 * /getTasks:
 *   get:
 *     summary: Get all active tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Tasks listed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Tasks listed successfully
 *                 tasks:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Task'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/getTasks', getTasks);

/**
 * @swagger
 * /getTask/{tid}:
 *   get:
 *     summary: Get a specific task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: tid
 *         schema:
 *           type: string
 *         required: true
 *         description: The task ID
 *         example: 64f8a123b123456789012345
 *     responses:
 *       200:
 *         description: Task found successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Task found successfully
 *                 task:
 *                   $ref: '#/components/schemas/Task'
 *       400:
 *         description: Bad request - Invalid task ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Task not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Task not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/getTask/:tid', getTaskValidator, getTask);

/**
 * @swagger
 * /updateTask/{tid}:
 *   put:
 *     summary: Update a specific task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: tid
 *         schema:
 *           type: string
 *         required: true
 *         description: The task ID
 *         example: 64f8a123b123456789012345
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskInput'
 *     responses:
 *       200:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Task updated successfully
 *                 task:
 *                   $ref: '#/components/schemas/Task'
 *       400:
 *         description: Bad request - Validation error or invalid task ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Task not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Task not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/updateTask/:tid', updateTaskValidator, updateTask);

/**
 * @swagger
 * /deleteTask/{tid}:
 *   delete:
 *     summary: Delete a specific task (soft delete)
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: tid
 *         schema:
 *           type: string
 *         required: true
 *         description: The task ID
 *         example: 64f8a123b123456789012345
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Task deleted successfully
 *                 task:
 *                   $ref: '#/components/schemas/Task'
 *       400:
 *         description: Bad request - Invalid task ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Task not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Task not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/deleteTask/:tid', deleteTaskValidator, deleteTask);

export default router;