

var race = null;
var class1 = null;
var subclass1 = null;
var backg = null;

var langs = [];
var prof_arm = [];
var prof_weap = [];
var prof_tool = [];
var skills = [];
var experts = [];
var senses = {};
var resists = [];

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

// inital set

const levelDisplay = document.getElementById('level');
levelDisplay.innerHTML = level;
const specDisplay = document.getElementById('species');
const classDisplay = document.getElementById('class');

const strDisplay = document.getElementById('str');
const strMod = document.getElementById('strmod')
const dexDisplay = document.getElementById('dex');
const dexMod = document.getElementById('dexmod')
const conDisplay = document.getElementById('con');
const conMod = document.getElementById('conmod')
const intDisplay = document.getElementById('int');
const intMod = document.getElementById('intmod')
const wisDisplay = document.getElementById('wis');
const wisMod = document.getElementById('wismod')
const chaDisplay = document.getElementById('cha');
const chaMod = document.getElementById('chamod')

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


// RACE SELECTION
// skill decoration update
const skillselectSpec = document.getElementsByClassName('skillselectspec');

for (let i = 0; i < skillselectSpec.length; i++) {
    const skill = skillselectSpec[i];

    // rotate plus into x on click
    skill.addEventListener('click', function () {
        skill.style.color = '#BC9116';
        skill.style['text-decoration'] = 'underline';
        skillName = skill.classList[1];
        skills.push(skillName);

        for (let j = 0; j < skillselectSpec.length; j++) {
            if (!(skillselectSpec[j] == skill)) {
                skillselectSpec[j].style.color = '#1c1c1c';
                skillselectSpec[j].style['text-decoration'] = 'none';
                skills = skills.filter(item => item !== skillselectSpec[j].classList[1]);              
            }
        }
    })
};

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