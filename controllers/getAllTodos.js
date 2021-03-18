const handleGetAllTodos = async (req, res, todo) => {
	try {
		const items = await todo.find({}); // it return an array of objects

		res.json(items);
	} catch (error) {
		res.status(400).json('error reading todos');
	}
};

module.exports = {
	handleGetAllTodos
};