module.exports = function(mongoose) {
    var ObjectId = mongoose.Schema.Types.ObjectId;
    
    return mongoose.model('race', {
        name: String,
        type: String, //NPC, PC
        avgHeight: Number,
        avgWeight: Number,
        size: String,
        vision: String,
        speed: String,
        languages: [String],
        description: String,
        racialFeats: [String]
    });
};