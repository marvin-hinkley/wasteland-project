module.exports = function(mongoose) {
    var ObjectId = mongoose.Schema.Types.ObjectId;
    
    return mongoose.model('character', {
//-----------info---------------------------------------------------------------        
        name: String,
        type: String, //NPC, PC, DM
        level: Number,
        exp: Number,
        alignment: String,
        size: String,
        gender: String,
        age: Number,
        weight: Number,
        deity: String,
        race: ObjectId,
        playerClasses: [ObjectId],
        hpTotal: Number,
//-----------campaign--------------------------------------------------------------        
        hpCurrent: Number,
        resourceCurrent: Number,
        items: [ObjectId],
//-----------stats--------------------------------------------------------------
        strength: Number,
        constitution: Number,
        dexterity: Number,
        intelligence: Number,
        wisdom: Number,
        charisma: Number,
        healthPoints: Number,
        actionPoints: Number,
        armorClass: Number,
        fortitude: Number,
        willpower: Number,
        speed: Number,
        passiveInsight: Number,
        passivePerception: Number,
        initiative: Number,
        acrobatics: Number,
        arcana: Number,
        athletics: Number,
        bluff: Number,
        diplomacy: Number,
        dungeoneering: Number,
        endurance: Number,
        heal: Number,
        historySkill: Number,
        insight: Number,
        intimidate: Number,
        nature: Number,
        perception: Number,
        religion: Number,
        stealth: Number,
        streetwise: Number,
        thievery: Number
    });
};