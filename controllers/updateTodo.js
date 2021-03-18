const handleUpdateTodo = async (req, res, schema, todo) => {
	try {
		const { id } = req.params;
		// check if req.body is valid
		const value = await schema.validateAsync(req.body);
		// check if the id is in the database
		const item = await todo.findOne({ // it returns an object
			_id: id
		});

		if (!item) {
			res.status(400).json('unable to update');
		} else {
			await todo.update(
				{ _id: id }, // filter
				{ $set: value } // what to update
			);

			// res.json(value);
			res.json('todo updated');
		}
	} catch (error) {
		res.status(400).json('error updating todo');
	}
};

module.exports = {
	handleUpdateTodo
};