// hide slides by default
var slides = document.getElementsByClassName('slides');

for (let i = 1; i < slides.length; i++) {
    slides[i].classList.add('hidden');
}

// show slides when icon clicked
const morIcon = document.getElementById('morriganIcon');
const daghdaIcon = document.getElementById('daghdaIcon');

let deities = [];
deities.push(daghdaIcon);
deities.push(morIcon);

morIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const morSlide = document.getElementById('morrigan');
    morSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    morIcon.classList.add('iconClicked');
});

daghdaIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const daghdaSlide = document.getElementById('daghda');
    daghdaSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    daghdaIcon.classList.add('iconClicked');
});

// move when arrows navigated
const nextImg = document.getElementById('rightNext');
const prevImg = document.getElementById('leftNext');

nextImg.addEventListener('click', function () {
    // find current slide index
    let currSlide = 0;

    for (let i = 1; i < slides.length; i++) {
        if (!(slides[i].classList.contains('hidden'))) {
            currSlide = i;
        }
    }

    // check edge cases
    let index = currSlide + 1;
    if (index >= slides.length) {
        index = 0
    }

    // update shown slides / icon
    slides[currSlide].classList.add('hidden');
    deities[currSlide].classList.remove('iconClicked');

    slides[index].classList.remove('hidden');
    deities[index].classList.add('iconClicked');
});

prevImg.addEventListener('click', function () {
    // find current slide index
    let currSlide = 0;

    for (let i = 1; i < slides.length; i++) {
        if (!(slides[i].classList.contains('hidden'))) {
            currSlide = i;
        }
    }

    // check edge cases
    let index = currSlide - 1;
    if (index < 0) {
        index = slides.length - 1;
    }

    // update shown slides / icon
    slides[currSlide].classList.add('hidden');
    deities[currSlide].classList.remove('iconClicked');

    slides[index].classList.remove('hidden');
    deities[index].classList.add('iconClicked');
})


// OPEN/CLOSE MENU
try {
    const menuBtns = document.getElementsByClassName('menu-btn');
    const xmarks = document.getElementsByClassName('close-menu-btn');
    const menus = document.getElementsByClassName('nav-menu');
    const text = document.getElementById('headertext');


    for (let i = 0; i < menuBtns.length; i++) {
        const menuBtn = menuBtns[i];
        
        menuBtn.addEventListener('click', function () {
            menus[i].style.visibility = 'visible';
            menuBtn.style.display = 'none';
            xmarks[i].style.display = 'block';
            text.style.color = '#fff';

            for (let i = 0; i < opens.length; i++) {
                const openBtn = opens[i];
                openBtn.style.display = 'none';
            }
        })
    }

    for (let i = 0; i < xmarks.length; i++) {
        const xmark = xmarks[i];
        
        xmark.addEventListener('click', function () {
            menus[i].style.visibility = 'hidden';
            menuBtns[i].style.display = 'block';
            xmark.style.display = 'none';
            text.style.color = '#1c1c1c'

            for (let i = 0; i < opens.length; i++) {
                const openBtn = opens[i];
                openBtn.style.display = 'block';
            }
        })
    }

} catch (TypeError) {

}