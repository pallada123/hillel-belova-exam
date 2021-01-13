let express = require('express');
let bodyParser = require('body-parser');
let MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;
const path = require('path');

let app = express();
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
	})
});

//получив GET запрос с клиента, отдаём запись из базы с ID, указаным в параметре
// app.get('/mycities/:id', (req, res) => {
// 	db.collection('mycities').findOne({_id: ObjectID(req.params.id)}, (err, docs) => {
// 		if(err) {
// 			console.log(err)
// 			return res.sendStatus(500);
// 		}
// 		res.send(docs);
// 	})
// });

//получив PUT запрос с клиента с новым значением ключа name в body запроса, меняем в базе значение ключа name у элемента по ID в параметре
// app.put('/mycities/:id', (req, res) => {
// 	db.collection('mycities').updateOne({_id: ObjectID(req.params.id)}, {$set: {name: req.body.name}}, (err) => {
// 		if(err) {
// 			console.log(err)
// 			return res.sendStatus(500);
// 		}
// 		res.sendStatus(200);
// 	})
// });

//получив DELETE запрос с клиента, удаляем из базы элемент по ID в параметре
// app.delete('/mycities/:id', (req, res) => {
// 	db.collection('mycities').deleteOne({_id: ObjectID(req.params.id)}, (err) => {
// 		if(err) {
// 			console.log(err)
// 			return res.sendStatus(500);
// 		}
// 		res.sendStatus(200);
// 	})
// });

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