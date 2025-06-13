// DEITIES SLIDES

try {
    // hide slides by default
var slides = document.getElementsByClassName('slides');

for (let i = 1; i < slides.length; i++) {
    slides[i].classList.add('hidden');
}

// show slides when icon clicked
const morIcon = document.getElementById('morriganIcon');
const daghdaIcon = document.getElementById('daghdaIcon');
const lughIcon = document.getElementById('lughIcon');
const dunatisIcon = document.getElementById('dunatisIcon');
const mathonwyIcon = document.getElementById('mathonwyIcon');
const maclirIcon = document.getElementById('maclirIcon');
const machaIcon = document.getElementById('machaIcon');
const silvanusIcon = document.getElementById('silvanusIcon');
const oghmaIcon = document.getElementById('oghmaIcon');
const belenusIcon = document.getElementById('belenusIcon');
const nuadaIcon = document.getElementById('nuadaIcon');
const diancechtIcon = document.getElementById('diancechtIcon');
const arawnIcon = document.getElementById('arawnIcon');
const goibniuIcon = document.getElementById('goibniuIcon');
const cailleachIcon = document.getElementById('cailleachIcon');
const aengusIcon = document.getElementById('aengusIcon');
const donnIcon = document.getElementById('donnIcon');

let deities = [];
deities.push(daghdaIcon);
deities.push(morIcon);
deities.push(lughIcon)
deities.push(dunatisIcon);
deities.push(mathonwyIcon);
deities.push(maclirIcon)
deities.push(machaIcon)
deities.push(silvanusIcon);
deities.push(oghmaIcon);
deities.push(belenusIcon);
deities.push(nuadaIcon);
deities.push(diancechtIcon);
deities.push(arawnIcon);
deities.push(goibniuIcon)
deities.push(cailleachIcon);
deities.push(aengusIcon);
deities.push(donnIcon)

donnIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const donnSlide = document.getElementById('donn');
    donnSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    donnIcon.classList.add('iconClicked');
});

aengusIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const aengusSlide = document.getElementById('aengus');
    aengusSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    aengusIcon.classList.add('iconClicked');
});

cailleachIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const cailleachSlide = document.getElementById('cailleach');
    cailleachSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    cailleachIcon.classList.add('iconClicked');
});

goibniuIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const goibniuSlide = document.getElementById('goibniu');
    goibniuSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    goibniuIcon.classList.add('iconClicked');
});

arawnIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const arawnSlide = document.getElementById('arawn');
    arawnSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    arawnIcon.classList.add('iconClicked');
});

diancechtIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const diancechtSlide = document.getElementById('diancecht');
    diancechtSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    diancechtIcon.classList.add('iconClicked');
});

nuadaIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const nuadaSlide = document.getElementById('nuada');
    nuadaSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    nuadaIcon.classList.add('iconClicked');
});

belenusIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const belenusSlide = document.getElementById('belenus');
    belenusSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    belenusIcon.classList.add('iconClicked');
});

oghmaIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const oghmaSlide = document.getElementById('oghma');
    oghmaSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    oghmaIcon.classList.add('iconClicked');
});

silvanusIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const silvanusSlide = document.getElementById('silvanus');
    silvanusSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    silvanusIcon.classList.add('iconClicked');
});

machaIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const machaSlide = document.getElementById('macha');
    machaSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    machaIcon.classList.add('iconClicked');
});

maclirIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const maclirSlide = document.getElementById('maclir');
    maclirSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    maclirIcon.classList.add('iconClicked');
});

mathonwyIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const mathonwySlide = document.getElementById('mathonwy');
    mathonwySlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    mathonwyIcon.classList.add('iconClicked');
});

dunatisIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const dunatisSlide = document.getElementById('dunatis');
    dunatisSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    dunatisIcon.classList.add('iconClicked');
});

lughIcon.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    const lughSlide = document.getElementById('lugh');
    lughSlide.classList.remove('hidden');

    for (let i = 0; i < deities.length; i++) {
        deities[i].classList.remove('iconClicked')        
    }

    lughIcon.classList.add('iconClicked');
});

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
} catch (TypeError) {
    
}

// OPEN/CLOSE MENU
try {
    const menuBtns = document.getElementsByClassName('menu-btn');
    const xmarks = document.getElementsByClassName('close-menu-btn');
    const menus = document.getElementsByClassName('nav-menu');
    const opens = document.getElementsByClassName('fa-ellipsis');
    const texts = document.getElementsByClassName('headertext');


    for (let i = 0; i < menuBtns.length; i++) {
        const menuBtn = menuBtns[i];
        
        menuBtn.addEventListener('click', function () {
            menus[i].style.height = '100%';
            menuBtn.style.display = 'none';
            xmarks[i].style.display = 'block';
            texts[i].style.visibility = 'hidden';

            for (let i = 0; i < opens.length; i++) {
                const openBtn = opens[i];
                openBtn.style.display = 'none';
            }
        })
    }

    for (let i = 0; i < xmarks.length; i++) {
        const xmark = xmarks[i];
        
        xmark.addEventListener('click', function () {
            menus[i].style.height = '0%';
            menuBtns[i].style.display = 'block';
            xmark.style.display = 'none';
            texts[i].style.visibility = 'visible';

            for (let i = 0; i < opens.length; i++) {
                const openBtn = opens[i];
                openBtn.style.display = 'block';
            }
        })
    }

    const collapseMenus = document.getElementsByClassName('collapse-menu');


    for (let i = 0; i < opens.length; i++) {
        const openBtn = opens[i];
        
        openBtn.addEventListener('click', function () {
            openBtn.classList.toggle('clicked-ellipsis');

            if (collapseMenus[i].style.display === 'block') {
                collapseMenus[i].style.display = 'none';
            } else {
                collapseMenus[i].style.display = 'block';
            }           
        })
    }

} catch (TypeError) {

}

// TIMELINE CLICK
try {
    const firstSection = document.getElementById('first');
    const secondSection = document.getElementById('second');
    const thirdSection = document.getElementById('third');

    const firstDesc = document.getElementById('firsttext');
    const secondDesc = document.getElementById('secondtext');
    const thirdDesc = document.getElementById('thirdtext');

    const firstText = document.getElementById('textfirst');
    const secondText = document.getElementById('textsecond');
    const thirdText = document.getElementById('textthird');

    // change appearance on click
    firstSection.addEventListener('click', function () {
        firstSection.classList.add('clickedsection');

        firstDesc.classList.add('clickedtext');

        // unclick other sections
        secondSection.classList.remove('clickedsection');
        thirdSection.classList.remove('clickedsection');

        secondDesc.classList.remove('clickedtext');
        thirdDesc.classList.remove('clickedtext');

        // show text
        firstText.classList.add('shown');
        firstText.classList.remove('hidden');

        // hide other texts
        secondText.classList.remove('shown');
        secondText.classList.add('hidden');

        thirdText.classList.remove('shown');
        thirdText.classList.add('hidden');
    })

    secondSection.addEventListener('click', function () {
        secondSection.classList.add('clickedsection');
        
        secondDesc.classList.add('clickedtext');

        // unclick other sections
        firstSection.classList.remove('clickedsection');
        thirdSection.classList.remove('clickedsection');

        firstDesc.classList.remove('clickedtext');
        thirdDesc.classList.remove('clickedtext');

        // show text
        secondText.classList.add('shown');
        secondText.classList.remove('hidden');

        // hide other texts
        firstText.classList.remove('shown');
        firstText.classList.add('hidden');

        thirdText.classList.remove('shown');
        thirdText.classList.add('hidden');
    })

    thirdSection.addEventListener('click', function () {
        thirdSection.classList.add('clickedsection');

        thirdDesc.classList.add('clickedtext');

        // unclick other sections
        secondSection.classList.remove('clickedsection');
        firstSection.classList.remove('clickedsection');

        secondDesc.classList.remove('clickedtext');
        firstDesc.classList.remove('clickedtext');

        // show text
        thirdText.classList.add('shown');
        thirdText.classList.remove('hidden');

        // hide other texts
        firstText.classList.remove('shown');
        firstText.classList.add('hidden');

        secondText.classList.remove('shown');
        secondText.classList.add('hidden');
    })


} catch (TypeError) {
    
}