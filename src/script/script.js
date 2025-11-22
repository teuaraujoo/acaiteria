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
        left: '3%',
        width: '35%',
    }, 
    'orange'
);

tl.to(
    '#acai', 
    {
        top: '158%',
        left: '20%',
        width: '16%',
        rotate: '-25deg',
    }, 
    'orange'
);

tl.to(
    '#laranja', 
    {
        width: '15%',
        top: '168%',
        right: '10%'
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
    '.pipoca', 
    {   
        rotate: '-90deg', 
        left: '-100%',
        top: '110%',
    }, 
    'ca'
);

tl2.from(
    '#churros', 
    {   
        rotate: '-90deg', 
        left: '-100%',
        top: '110%',
    }, 
    'ca'
);

tl2.from(
    '.doce', 
    {   
        rotate: '90deg', 
        left: '100%',
        top: '110%',
    }, 
    'ca'
);

tl2.from(
    '#pipocar', 
    {   
        rotate: '90deg', 
        left: '100%',
        top: '110%',
    }, 
    'ca'
);



tl2.from(
    '#acaicar', 
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

// Animação para a seção "Sobre"
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