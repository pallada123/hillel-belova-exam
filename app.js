const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const path = require('path');

const app = express();
let db;

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
const client = new MongoClient(url);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));


app.get('/cities', (req, res) => {
	db.collection('cities').find().toArray((err, cities) => {
		if(err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(cities);
	});
});

app.get('/mycities', (req, res) => {
	db.collection('mycities').find().toArray((err, cities) => {
		if(err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(cities);
	});
});

app.post('/mycities', (req, res) => {
	db.collection('mycities').insertOne(req.body, (err, newCity) => {
		if(err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(newCity.ops[0]);
	});
});

app.delete('/mycities/:id', (req, res) => {
	db.collection('mycities').deleteOne({_id: ObjectID(req.params.id)}, (err) => {
		if(err) {
			console.log(err)
			return res.sendStatus(500);
		}
		res.sendStatus(200);
	});
});

app.put('/mycities/:id', (req, res) => {
	db.collection('mycities').updateOne({_id: ObjectID(req.params.id)}, {$set: {cityId: req.body.cityId}}, (err) => {
		if(err) {
			console.log(err)
			return res.sendStatus(500);
		}
		res.sendStatus(200);
	});
});

client.connect(function(err) {
	if(err) {
		throw err;
	}

	console.log('mongodb connected successfully to server...');

	db = client.db(dbName);

	citiesCollectionInit();

	app.listen(3000, () => console.log('api started'));
});

function citiesCollectionInit() {
	db.collection('cities').find().toArray((err, cities) => {
		if(err) {
			throw err;
		}

		if (cities.length > 0) {
			return console.log('collection already exists');
		}

		const fs = require('fs');
		fs.readFile('data/city.list.json', (err, data) => {

			const arr = JSON.parse(Buffer.from(data).toString());

			const clippedArr = arr.map((item) => {
				return {
					id: item.id,
					name: item.name
				};
			});

			db.collection('cities').insertMany(clippedArr, (err) => {
				if(err) {
					throw err;
				}
			});
			console.log('Cities list has been added to DB');

		});
	});
}