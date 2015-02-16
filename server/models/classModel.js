module.exports = function(mongoose) {
    var ObjectId = mongoose.Schema.Types.ObjectId;
    
    return mongoose.model('playerClass', {
        name: String,
        type: String, //NPC, PC
        role: String,
        description: String,
        notes: String,
        resource: String,
        resourceMax: Number,
        hp: Number,
        passives: [String],
        abilities: [ObjectId]
    });
};