
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

window.addEventListener('load', function () {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

window.addEventListener('scroll', function () {
    const subparallax = document.querySelector('.subparallax');
    let scrollPosition = window.pageYOffset;
    subparallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

window.addEventListener('load', function () {
    const subparallax = document.querySelector('.subparallax');
    let scrollPosition = window.pageYOffset;
    subparallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
})

function changeColorClick(element) {
    element.addEventListener('click', function() {
        element.style.color = '#000';
    })
}

const arkmoreImg = document.getElementById('arkmoreimg');
const arkmoreHover = document.getElementById('arkmorehover');

arkmoreImg.addEventListener('mouseenter', function () {
    arkmoreHover.classList.remove('noheight');

    const text = document.getElementById('arkmoretext')
    text.style.display = "block";
})

arkmoreHover.addEventListener('mouseenter', function () {
    arkmoreHover.classList.remove('noheight');

    const text = document.getElementById('arkmoretext')
    text.style.display = "block";
})

arkmoreHover.addEventListener('mouseleave', function () {
    arkmoreHover.classList.add('noheight');

    const text = document.getElementById('arkmoretext')
    text.style.display = "none";
})

arkmoreImg.addEventListener('mouseleave', function () {
    arkmoreHover.classList.add('noheight');

    const text = document.getElementById('arkmoretext')
    text.style.display = "none";
})

const ashariaImg = document.getElementById('ashariaimg');
const ashariaHover = document.getElementById('ashariahover');

ashariaImg.addEventListener('mouseenter', function () {
    ashariaHover.classList.remove('noheight');

    const text = document.getElementById('ashariatext')
    text.style.display = "block";
})

ashariaHover.addEventListener('mouseenter', function () {
    ashariaHover.classList.remove('noheight');

    const text = document.getElementById('ashariatext')
    text.style.display = "block";
})

ashariaHover.addEventListener('mouseleave', function () {
    ashariaHover.classList.add('noheight');

    const text = document.getElementById('ashariatext')
    text.style.display = "none";
})

ashariaImg.addEventListener('mouseleave', function () {
    ashariaHover.classList.add('noheight');

    const text = document.getElementById('ashariatext')
    text.style.display = "none";
})

const kidetaImg = document.getElementById('kidetaimg');
const kidetaHover = document.getElementById('kidetahover');

kidetaImg.addEventListener('mouseenter', function () {
    kidetaHover.classList.remove('noheight');

    const text = document.getElementById('kidetatext')
    text.style.display = "block";
})

kidetaHover.addEventListener('mouseenter', function () {
    kidetaHover.classList.remove('noheight');

    const text = document.getElementById('kidetatext')
    text.style.display = "block";
})

kidetaHover.addEventListener('mouseleave', function () {
    kidetaHover.classList.add('noheight');

    const text = document.getElementById('kidetatext')
    text.style.display = "none";
})

kidetaImg.addEventListener('mouseleave', function () {
    kidetaHover.classList.add('noheight');

    const text = document.getElementById('kidetatext')
    text.style.display = "none";
})

const kmoreImg = document.getElementById('kmoreimg');
const kmoreHover = document.getElementById('kmorehover');

kmoreImg.addEventListener('mouseenter', function () {
    kmoreHover.classList.remove('noheight');

    const text = document.getElementById('kmoretext')
    text.style.display = "block";
})

kmoreHover.addEventListener('mouseenter', function () {
    kmoreHover.classList.remove('noheight');

    const text = document.getElementById('kmoretext')
    text.style.display = "block";
})

kmoreHover.addEventListener('mouseleave', function () {
    kmoreHover.classList.add('noheight');

    const text = document.getElementById('kmoretext')
    text.style.display = "none";
})

kmoreImg.addEventListener('mouseleave', function () {
    kmoreHover.classList.add('noheight');

    const text = document.getElementById('kmoretext')
    text.style.display = "none";
})


const othImg = document.getElementById('othimg');
const othHover = document.getElementById('othhover');

othImg.addEventListener('mouseenter', function () {
    othHover.classList.remove('noheight');

    const text = document.getElementById('othtext')
    text.style.display = "block";
})

othHover.addEventListener('mouseenter', function () {
    othHover.classList.remove('noheight');

    const text = document.getElementById('othtext')
    text.style.display = "block";
})

othHover.addEventListener('mouseleave', function () {
    othHover.classList.add('noheight');

    const text = document.getElementById('othtext')
    text.style.display = "none";
})

othImg.addEventListener('mouseleave', function () {
    othHover.classList.add('noheight');

    const text = document.getElementById('othtext')
    text.style.display = "none";
})


// var mapPopUp = document.getElementById('ashariamap');
// mapPopUp.addEventListener('click', function () {
//     const popUpImg = document.getElementById('ashariapopup');
//     popUpImg.style.display = 'block';
// })

// var closePopUp = document.getElementById('ashariaxmark'); 
// closePopUp.addEventListener('click', function () {
//     const popUpImg = document.getElementById('ashariapopup');
//     popUpImg.style.display = 'hidden';
// })