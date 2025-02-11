window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const heroHeight = document.querySelector('.section__hero').offsetHeight;

    if (window.scrollY > heroHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
