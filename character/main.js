

var race = null;
var class1 = null;
var subclass1 = null;
var backg = null;
var hitDie = null;

var langs = [];
var prof_arm = [];
var prof_weap = [];
var prof_tool = [];
var skills = [];
var experts = [];
var senses = {};
var resists = [];
var saves = []

var level = 1;

var str = 10;
var dex = 10;
var con = 10;
var int = 10;
var wis = 10;
var cha = 10;

var cantrips = []
var spells1 = []
var spells2 = []
var spells3 = []

var raceFeats = {}

// score to modifier function
function getModifier(score) {
    var mod = Math.floor((score - 10) / 2);
    
    if (mod >= 0) {
        var modifier = "+".concat(mod)
    } else {
        var modifier = "-".concat(mod)
    }

    return modifier;
}

// profiency 
function proficiency(level) {
    if (level <= 4) {
        return 2;
    } else if (level <= 9) {
        return 3;
    } else if (level <= 12) {
        return 4;
    } else if (level <= 16) {
        return 5;
    } else {
        return 6;
    }
}
var proficiency = proficiency(level);

// inital set

const levelDisplay = document.getElementById('level');
levelDisplay.innerHTML = level;
const specDisplay = document.getElementById('species');
const classDisplay = document.getElementById('class');

// scores
var strDisplay = document.getElementById('str');
var strMod = document.getElementById('strmod')
var dexDisplay = document.getElementById('dex');
var dexMod = document.getElementById('dexmod')
var conDisplay = document.getElementById('con');
var conMod = document.getElementById('conmod')
var intDisplay = document.getElementById('int');
var intMod = document.getElementById('intmod')
var wisDisplay = document.getElementById('wis');
var wisMod = document.getElementById('wismod')
var chaDisplay = document.getElementById('cha');
var chaMod = document.getElementById('chamod')

strDisplay.innerHTML = str;
dexDisplay.innerHTML = dex;
conDisplay.innerHTML = con;
intDisplay.innerHTML = int;
wisDisplay.innerHTML = wis;
chaDisplay.innerHTML = cha;

strMod.innerHTML = getModifier(str);
dexMod.innerHTML = getModifier(dex);
conMod.innerHTML = getModifier(con);
intMod.innerHTML = getModifier(int);
wisMod.innerHTML = getModifier(wis);
chaMod.innerHTML = getModifier(cha);


// saving throws
var strSave = document.getElementById('strsave');
var dexSave = document.getElementById('dexsave');
var conSave = document.getElementById('consave');
var intSave = document.getElementById('intsave');
var wisSave = document.getElementById('wissave');
var chaSave = document.getElementById('chasave');

strSave.innerHTML = getModifier(str);
dexSave.innerHTML = getModifier(dex);
conSave.innerHTML = getModifier(con);
intSave.innerHTML = getModifier(int);
wisSave.innerHTML = getModifier(wis);
chaSave.innerHTML = getModifier(cha);

// skills
const allSkills = [];

var athletics = document.getElementById('athletics');
var acrobatics = document.getElementById('acrobatics');
var stealth = document.getElementById('stealth');
var sleightHand = document.getElementById('sleightofhand');
var arcana = document.getElementById('arcana');
var history = document.getElementById('history');
var investigation = document.getElementById('investigation');
var nature = document.getElementById('nature');
var religion = document.getElementById('religion');
var animalHandle = document.getElementById('animalhandling');
var insight = document.getElementById('insight');
var medicine = document.getElementById('medicine');
var perception = document.getElementById('perception');
var survival = document.getElementById('survival');
var deception = document.getElementById('deception');
var intimidation = document.getElementById('intimidation');
var performance = document.getElementById('performance');
var persuasion = document.getElementById('persuasion');


athletics.innerHTML = getModifier(str)
acrobatics.innerHTML = getModifier(dex)
stealth.innerHTML = getModifier(dex)
sleightHand.innerHTML = getModifier(dex)

arcana.innerHTML = getModifier(int)
history.innerHTML = getModifier(int)
investigation.innerHTML = getModifier(int)
nature.innerHTML = getModifier(int)
religion.innerHTML = getModifier(int)

animalHandle.innerHTML = getModifier(wis)
insight.innerHTML = getModifier(wis)
medicine.innerHTML = getModifier(wis)
perception.innerHTML = getModifier(wis)
survival.innerHTML = getModifier(wis)

deception.innerHTML = getModifier(cha)
intimidation.innerHTML = getModifier(cha)
performance.innerHTML = getModifier(cha)
persuasion.innerHTML = getModifier(cha)

// RACE SELECTION
// skill decoration update
const skillselectSpec = document.getElementsByClassName('skillselectspec');

for (let i = 0; i < skillselectSpec.length; i++) {
    const skill = skillselectSpec[i];

    skill.addEventListener('click', function () {
        skill.style.color = '#BC9116';
        skill.style['text-decoration'] = 'underline';
        skillName = skill.classList[1];
        skills.push(skillName);

        if (skillName == "insight") {
            const symbol = getModifier(wis)[0];
            const val = Number(getModifier(wis).slice(1))
            insight.innerHTML = symbol + (val + proficiency);
        } else if (skillName == "perception") {
            const symbol = getModifier(wis)[0];
            const val = Number(getModifier(wis).slice(1))
            perception.innerHTML = symbol + (val + proficiency);
        }

        for (let j = 0; j < skillselectSpec.length; j++) {
            if (!(skillselectSpec[j] == skill)) {
                skillselectSpec[j].style.color = '#1c1c1c';
                skillselectSpec[j].style['text-decoration'] = 'none';
                skills = skills.filter(item => item !== skillselectSpec[j].classList[1]);
                
                if (skillselectSpec[j].classList[1] == "insight") {
                    insight.innerHTML = getModifier(wis);
                }
            }            
            
        }

    })
};

// SPECIES SELECTIONS
// high elf
const highElf = document.getElementById('highelfsel')
const unHighElf = document.getElementById('highelfdes')
const highElfdetails = document.getElementById('highElfDetails');

highElf.addEventListener('click', function () {
    race = 'High Elf';
    specDisplay.innerHTML = race;

    highElf.style.display = 'none';
    unHighElf.style.display = 'block';
    highElfdetails.style.display = 'block';

    senses['darkvision'] = 60;
    raceFeats['cantrip'] = 'Prestidigitation';
    raceFeats['spells'] = ['Detect Magic', 'Misty Step'];
    raceFeats['feature'] = 'trance'

    resists.push('charmed');

});

unHighElf.addEventListener('click', function () {
    race = null;
    specDisplay.innerHTML = race;

    highElf.style.display = 'block';
    unHighElf.style.display = 'none';
    highElfdetails.style.display = 'none';

    senses = {};
    raceFeats = {};
    resists = [];
});

// CLASS SELECTIONS
// fighter
const fighter = document.getElementById('fightersel')
const unFighter = document.getElementById('fighterdes')
const fighterDetails = document.getElementById('fighterDetails');

fighter.addEventListener('click', function () {
    class1 = 'Fighter';
    classDisplay.innerHTML = class1;

    fighter.style.display = 'none';
    unFighter.style.display = 'block';
    fighterDetails.style.display = 'block';
    
    hitDie = 10;

    prof_arm.push('Light');
    prof_arm.push('Medium');
    prof_arm.push('Heavy');
    prof_arm.push('Shields');

    prof_weap.push('Simple');
    prof_weap.push('Martial')

    saves.push('con');
    saves.push('str');
});

unFighter.addEventListener('click', function () {
    class1 = null;
    specDisplay.innerHTML = class1;

    fighter.style.display = 'block';
    unFighter.style.display = 'none';
    fighterDetails.style.display = 'none';
});