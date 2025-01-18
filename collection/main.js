
// SHOW / HIDE STATBLOCK
const pluses = document.getElementsByClassName('fa-plus');
const statblocks = document.getElementsByClassName('statblock');

for (let i = 0; i < pluses.length; i++) {
    const element = pluses[i];
    const clist = element.classList;

    // rotate plus into x on click
    element.addEventListener('click', function () {
        clist.toggle('intox');

        // show stablock ?? please
        const statlist = statblocks[i].classList;
        statlist.toggle('showstats');
    })
}