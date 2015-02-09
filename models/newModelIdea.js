module.exports = function(mongoose) {
    //globals
    var ObjectId = mongoose.Schema.Types.ObjectId;
    
    //db model
    this.model = mongoose.model('playerClass', {
        name: String,
        type: String, //NPC, PC
        role: String,
        description: String,
        notes: String,
        resource: String,
        hp: Number,
        passives: [String],
        abilities: [ObjectId]
    });
    
    //methods
    this.useAbility = function(abilityId) {
        
    };
};