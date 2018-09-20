const db = require('../../config/db.config.js');
const User = db.users;

// Post a User
exports.create = (req, res) => {
	var data = req.body
	data.birthday = data.birthday.formatted

	// var birthday = req.body.birthday.date.year + '.' + req.body.birthday.date.month + '.' + req.body.birthday.date.day;	
	// Save to PostgreSQL database
	User.create(data).then(user => {		
			// Send created user to client
			res.json(user);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// FETCH All Users
exports.findAll = (req, res) => {
	User.findAll().then(users => {
			// Send All Users to Client
			res.json(users.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find a User by Id
exports.findById = (req, res) => {	
	User.findById(req.params.id).then(user => {
			res.json(user);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// Update a User
exports.update = (req, res) => {
	const id = req.body.id;
	var data = req.body
	data.birthday = data.birthday.formatted
	User.update( data, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> User Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

// Delete a User by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	User.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> User Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};