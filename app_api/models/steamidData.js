var mongoose = require('mongoose');

// changed id name
var SteamidSchema = new mongoose.Schema({
	id: String
});

mongoose.model('GameData', SteamidSchema, 'GameData');