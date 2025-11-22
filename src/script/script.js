// Criação de Timeline do GSAP com animações sincronizadas com o scroll

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#about',
        start: '0% 95%',
        end: '70% 50%',
        scrub: 1,  // Vincula a animação ao scroll
        // markers: true
    }
});

tl.to(
    '#copoacai', 
    {
        top: '110%',
        left: '5%',
        width: '29%',
    }, 
    'orange'
);

tl.to(
    '#acai', 
    {
        top: '155%',
        left: '20%',
        width: '16%',
        rotate: '-25deg',
    }, 
    'orange'
);

tl.to(
    '#folha', 
    {
        top: '110%',
        rotate: '530deg',
        left: '70%',
    }, 
    'orange'
);

tl.to(
    '#folha2', 
    {
        top: '110%',
        rotate: '130deg',
        left: '0%',
    }, 
    'orange'
);

// CRIANDO OUTRA TIMELINE

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#products',
        start: '0% 95%',
        end: '20% 50%',
        scrub: 1,  // Vincula a animação ao scroll
    }
});


tl2.from(
    '#tapioca', 
    {   
        rotate: '-90deg', 
        left: '-100%',
        top: '110%',
    }, 
    'ca'
);


tl2.from(
    '#burguer', 
    {   
        rotate: '90deg', 
        left: '100%',
        top: '110%',
    }, 
    'ca'
);


tl2.from(
    '#poteacai', 
    {   
        rotate: '-90deg', 
        left: '-100%',
        top: '110%',
    }, 
    'ca'
);

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '#products',
        start: '0% 95%',
        end: '20% 50%',
        scrub: 1,  // Vincula a animação ao scroll
    }
});

// Fade-in "Sobre"
gsap.to('#about', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        toggleClass: 'is-visible',
        // once: true
    }
});

gsap.to('.contact-container', {
    scrollTrigger: {
        trigger: '.contact-container',
        start: 'top 90%',
        toggleClass: 'is-visible',
        // once: true
    }
});

// Animação de fade-in na hero section e nav-bar ao carregar a página

window.addEventListener('load', function() {
    
    window.scrollTo(0, 0); //garante que a página comece no topo

    document.getElementById('hero').classList.add('is-visible');
    document.querySelector('.nav-container').classList.add('is-visible');
});

let mm = gsap.matchMedia();

mm.add("(max-width: 1728px)", () => {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: '0% 95%',
            end: '70% 50%',
            scrub: 1,
            // markers: true
        }
    });

    tl.to('#copoacai', {
        top: '120%',
    }, 'orange');

    tl.to('#acai', {
        top: '155%',
    }, 'orange');

    tl.to('#folha2', {
        left: '8%',
    }, 'orange');

    ScrollTrigger.refresh();
});

mm.add("(max-width: 1440px)", () => {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: '0% 95%',
            end: '70% 50%',
            scrub: 1,
            // markers: true
        }
    });

    tl.to('#copoacai', {
        top: '125%',
    }, 'orange');

    tl.to('#acai', {
        top: '160%',
    }, 'orange');

    tl.to('#folha', {
        top: '112%',
        width: '18%',
    }, 'orange');

    tl.to('#folha2', {
        top: '112%',
        left: '5%',
    }, 'orange');

    
    ScrollTrigger.refresh();
});

mm.add("(max-width: 1000px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: '0% 95%',
            end: '70% 50%',
            scrub: 1,
            // markers: true
        }
    });

    tl.to('#copoacai', {
        top: '132%',
    }, 'orange');

    tl.to('#acai', {
        top: '149%',
    }, 'orange');

    tl.to('#folha', {
        top: '125%',
    }, 'orange');

    tl.to('#folha2', {
        top: '115%',
        left: '8%',
    }, 'orange');

    ScrollTrigger.refresh();
});

mm.add("(max-width: 728px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: '0% 95%',
            end: '70% 50%',
            scrub: 1, 
            // markers: true
        }
    });

    tl.to('#copoacai', {
        top: '118%',
        left: '32%',
    }, 'orange');

    tl.to('#acai', {
        top: '128%',
        left: '50%',
    }, 'orange');

    tl.to('#folha', {
        top: '145%',
    }, 'orange');

    ScrollTrigger.refresh();
});

mm.add("(max-width: 428px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: '0% 95%',
            end: '70% 50%',
            scrub: 1, 
            // markers: true
        }
    });

    tl.to('#copoacai', {
        top: '110%',
        left: '32%',
    }, 'orange');

    tl.to('#acai', {
        top: '122%',
        left: '50%',
    }, 'orange');

    tl.to('#folha', {
        top: '150%',
    }, 'orange');

    ScrollTrigger.refresh();
});