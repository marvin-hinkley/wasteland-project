module.exports = function(app, mongoose) {
    var Character   = require('./models/characterModel')(mongoose),
        Campaign    = require('./models/campaignModel')(mongoose),
        User        = require('./models/userModel')(mongoose),
        CharClass   = require('./models/classModel')(mongoose),
        Feat        = require('./models/featModel')(mongoose),
        Item        = require('./models/itemModel')(mongoose),
        Race        = require('./models/raceModel')(mongoose);

    mongoose.connect('mongodb://localhost:27017/test');
    console.log('Connected to Mongo, Master.');
    
    /*
    var madhouse = new User({
        userName: 'madhouse',
        password: 'password',
        firstName: 'Marvin',
        lastName: 'Hinkley',
        city: 'Medford',
        state: 'Oregon',
        country: 'US',
        characters: null,
        campaigns: null
    });
    
    madhouse.save(function(err, data){
        if (err) {
            console.log(err);
        } else {
            console.log('Saved : ', data );
        }
    });
    */
};