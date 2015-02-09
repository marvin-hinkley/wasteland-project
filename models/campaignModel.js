module.exports = function(mongoose) {
    var ObjectId = mongoose.Schema.Types.ObjectId;
    
    return mongoose.model('campaign', {
        name: String,
        description: String,
        dungeonMaster: ObjectId,
        characters: [ObjectId]
    });
};
