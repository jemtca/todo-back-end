const handleDeleteTodo = async (req, res, todo) => {
	try {
		const { id } = req.params;
		const item = await todo.findOne( // it returns an object
			{ _id: id }
		);

		if (!item) {
			res.status(400).json('unable to delete todo');
		} else {
			await todo.remove(
				{ _id: id } // filter
			);

			res.json('todo deleted');
		}
	} catch (error) {
		res.status(400).json('error deleting todo');
	}
};

module.exports = {
	handleDeleteTodo
};