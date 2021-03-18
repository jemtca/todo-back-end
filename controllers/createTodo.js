const handleCreateTodo = async (req, res, schema, todo) => {
	try {
		// check if req.body is valid
		const value = await schema.validateAsync(req.body);
		const item = await todo.insert(value);

		// res.json(item);
		res.json('todo created');
	} catch (error) {
		res.status(400).json('error creating todo');
	}
};

module.exports = {
	handleCreateTodo
};