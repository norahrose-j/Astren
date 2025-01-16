
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