const express = require('express');
const cors = require('cors');
const monk = require('monk');
const Joi = require('joi');

const getAllTodos = require('./controllers/getAllTodos');
const getTodo = require('./controllers/getTodo');
const createTodo = require('./controllers/createTodo');
const updateTodo = require('./controllers/updateTodo');
const deleteTodo = require('./controllers/deleteTodo');

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'localhost/merntodo';

const app = express();

const db = monk(DATABASE_URL); // connect to a mongodb database using monk
const todo = db.get('todo'); // access to a specific collection

const schema = Joi.object({ // schema to validate incoming data
	description: Joi.string().trim().required()
});

// middlewares
app.use(cors());
app.use(express.json());

// GET ALL TODOS
app.get('/todos', (req, res) => getAllTodos.handleGetAllTodos(req, res, todo));

// GET TODO
app.get('/todos/:id', (req, res) => getTodo.handleGetTodo(req, res, todo));

// CREATE TODO
app.post('/todos', (req, res) => createTodo.handleCreateTodo(req, res, schema, todo));

// UPDATE TODO
app.put('/todos/:id', (req, res) => updateTodo.handleUpdateTodo(req, res, schema, todo));

// DELETE TODO
app.delete('/todos/:id', (req, res) => deleteTodo.handleDeleteTodo(req, res, todo));

app.listen(PORT, () => console.log(`app running on port ${PORT}`));
