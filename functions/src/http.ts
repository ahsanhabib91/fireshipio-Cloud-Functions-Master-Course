import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

import * as express from 'express';
// import * as cors from 'cors';
const cors = require('cors');

let num = 0;
console.log(`Inside http.ts ${num++}`);
export const basicHTTP = functions.https.onRequest((request, response) => {
	console.log(`Assalamualaikum from Firebase console .... ${num++}`);
	const name = request.query.name;
	if (!name) response.status(400).send('ERROR you must supply a name :(');
	response.send(`Assalamualaikum ${name}`);
});

// Custom Middleware
// const auth = (request: any, response: any, next: any) => {
// 	if (!request.header.authorization) {
// 	  response.status(400).send('unauthorized');
// 	}
  
// 	next();
// };

const app = express();
app.use(cors({ origin: true }));
// app.use(auth);

app.get('/cat', (request, response) => {
	console.log(`CAT .... ${num++}`);
	response.send('CAT');
});

app.get('/dog', (request, response) => {
	console.log(`DOG .... ${num++}`);
	response.send('DOG');
});

export const api = functions.https.onRequest(app);