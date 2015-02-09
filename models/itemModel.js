module.exports = function(mongoose) {
    var ObjectId = mongoose.Schema.Types.ObjectId;
    
    return mongoose.model('item', {
        name: String,
        description: String,
        type: String, //armor, weapon, gear, magic item, spell
        itemClass: String, //gold, silver, leather, cloth
        category: String,
        properties: [String],
        proficiency: String,
        range: Number,
        weight: Number,
        damage: Number,
        size: String,
        armorBonus: Number,
        shieldBonus: Number,
        minEnhancementBonus: Number,
        enhancement: String,
        critical: String,
        check: Number,
        speed: Number,
        price: Number,
        power: String,
        special: String,
        prerequisites: [String]
    });
};