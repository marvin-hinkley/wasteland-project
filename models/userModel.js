module.exports = function(mongoose, bcrypt) {
    var ObjectId = mongoose.Schema.Types.ObjectId;
    var Schema = mongoose.Schema;

    // User schema
    var User = new Schema({
        userName: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: String,
        lastName: String,
        city: String,
        state: String,
        country: String,
        characters: [ObjectId],
        campaigns: [ObjectId]
    });

    return mongoose.model('user', User);
};