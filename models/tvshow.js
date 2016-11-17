exports = module.exports = function(app, mongoose) {

	var tvshowSchema = new mongoose.Schema({
		title: 		{ type: String },
		genre: 		{
			type: String,
			enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
		},
	});

	mongoose.model('TVShow', tvshowSchema);

};