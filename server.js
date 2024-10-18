const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
	let fields = '';
	for (const [key, value] of Object.entries(request.query)) {
		fields+= `<li>${key}: ${value}</li>`;
	}
  response.send(`Get: <ul>${fields}</ul>`);
});

app.post('/', (request, response) => {
	let fields = '';
	for (const [key, value] of Object.entries(request.body)) {
		fields+= `<li>${key}: ${value}</li>`;
	}
    response.send(`Post: <ul>${fields}</ul>`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});