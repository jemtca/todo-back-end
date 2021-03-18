const handleGetTodo = async (req, res, todo) => {
	try {
		const { id } = req.params;
		const item = await todo.findOne({ // it returns an object
			_id: id
		});

		if (!item) {
			res.status(400).json('unable to get todo');
		} else {
			res.json(item);
		}
	} catch (error) {
		res.status(400).json('error reading todo');
	}
};

module.exports = {
	handleGetTodo
};