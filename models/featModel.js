module.exports = function(mongoose) {
    var ObjectId = mongoose.Schema.Types.ObjectId;
    
    return mongoose.model('feat', {
        name: String,
        type: String, //Divinity, Multiclass, Heroic
        description: String,
        benefit: String,
        special: String,
        prerequisites: [String]
    });
};