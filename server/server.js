const express = require('express');

let app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found.',
		name: 'Todo App v1.0'
	});

});

// GET /users
app.get('/users', (req, res) => {
	res.status(200).send([{
		name: 'DIN',
		age: 34
	}, {
		name: 'John',
		age: 52
	}, {
		name: 'Mike',
		age: 53
	}])
});

app.listen(3000);
module.exports.app = app;