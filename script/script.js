const showableElements = document.querySelectorAll('.hidden');
const mainHeader = document.getElementById('mainHeader');
let offset = 0;

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;

    if (offset > 100 && offset > lastScroll) {
        // scrolling UP and past 100px
        mainHeader.classList.add('headerAnimation');
    } else {
        // scrolling DOWN or near top
        mainHeader.classList.remove('headerAnimation');
    }

    lastScroll = offset;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showable');
        } else {
            entry.target.classList.remove('showable');
        }
    });
});

showableElements.forEach((el) => observer.observe(el));