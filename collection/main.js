
// SHOW / HIDE STATBLOCK
const pluses = document.getElementsByClassName('fa-plus');
const statblocks = document.getElementsByClassName('statblock');

for (let i = 0; i < pluses.length; i++) {
    const element = pluses[i];
    const cList = element.classList;

    // rotate plus into x on click
    element.addEventListener('click', function () {
        cList.toggle('intox');

        // show stablock ?? please
        const statList = statblocks[i].classList;
        statList.toggle('showstats');
    });
};

// FILTER BY TYPE
const npc = document.getElementById('npcfilter');
const monster = document.getElementById('monsterfilter');
const equip = document.getElementById('equipfilter');
const magic = document.getElementById('magicfilter');

const entries = document.getElementsByClassName('entry');

npc.addEventListener('click', function () {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if (eList.contains("npc")) {
            eList.add("showentry")
            eList.remove("hideentry")
        } else {
            eList.add("hideentry")
            eList.remove("showentry")
        }
    }
});

monster.addEventListener('click', function () {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if (eList.contains("monster")) {
            eList.add("showentry")
            eList.remove("hideentry")
        } else {
            eList.add("hideentry")
            eList.remove("showentry")
        }
    }
});

equip.addEventListener('click', function () {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if (eList.contains("equip")) {
            eList.add("showentry")
            eList.remove("hideentry")
        } else {
            eList.add("hideentry")
            eList.remove("showentry")
        }
    }
});

magic.addEventListener('click', function () {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const eList = entry.classList;

        if (eList.contains("magic")) {
            eList.add("showentry")
            eList.remove("hideentry")
        } else {
            eList.add("hideentry")
            eList.remove("showentry")
        }
    }
});