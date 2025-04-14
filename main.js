
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

// OPEN/CLOSE MENU
try {
    const menuBtns = document.getElementsByClassName('menu-btn');
    const xmarks = document.getElementsByClassName('close-menu-btn');
    const menus = document.getElementsByClassName('nav-menu');


    for (let i = 0; i < menuBtns.length; i++) {
        const menuBtn = menuBtns[i];
        
        menuBtn.addEventListener('click', function () {
            menus[i].style.visibility = 'visible';
            menuBtn.style.display = 'none';
            xmarks[i].style.display = 'block';
        })
    }

    for (let i = 0; i < xmarks.length; i++) {
        const xmark = xmarks[i];
        
        xmark.addEventListener('click', function () {
            menus[i].style.visibility = 'hidden';
            menuBtns[i].style.display = 'block';
            xmark.style.display = 'none';
        })
    }

    const opens = document.getElementsByClassName('open-menu');
    const collapseMenus = document.getElementsByClassName('collapse-menu');


    for (let i = 0; i < opens.length; i++) {
        const openBtn = opens[i];
        
        openBtn.addEventListener('click', function () {
            if (collapseMenus[i].style.display === 'block') {
                collapseMenus[i].style.display = 'none';
            } else {
                collapseMenus[i].style.display = 'block';
            }           
        })
    }

} catch (TypeError) {

}

// REGION PAGE HOVER OVERLAYS
try {
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
} catch (TypeError) {
}

try {
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
} catch (TypeError) {
    
}

try {
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
} catch (TypeError) {
    
}

try {
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
} catch (TypeError) {
    
}

try {
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
} catch (TypeError) {
    
}

try {
    var akmapPopUp = document.getElementById('arkmoremap');
    const akpopUpImg = document.getElementById('arkmorepopup');
    akmapPopUp.addEventListener('click', function () {
        akpopUpImg.style.display = 'block';
    })

    akpopUpImg.addEventListener('click', function () {
        akpopUpImg.style.display = 'none';
    })
} catch (TypeError) {
    
}

try {
    var ashmapPopUp = document.getElementById('ashariamap');
    const ashpopUpImg = document.getElementById('ashariapopup');
    ashmapPopUp.addEventListener('click', function () {
        ashpopUpImg.style.display = 'block';
    })

    ashpopUpImg.addEventListener('click', function () {
        ashpopUpImg.style.display = 'none';
    })

} catch (TypeError) {
    
}