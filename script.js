document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.scroll-to-section');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 20; // Ajusta este valor según sea necesario
                const offsetPosition = targetElement.offsetTop - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const descriptionBox = document.querySelector('.description-box');

    window.addEventListener('scroll', function () {
        const triggerOffset = window.innerHeight * 0.7; // Ajusta según sea necesario

        if (descriptionBox.getBoundingClientRect().top < triggerOffset) {
            descriptionBox.classList.add('active');
        } else {
            descriptionBox.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const description = document.querySelector('.description');

    window.addEventListener('scroll', function () {
        const triggerOffset = window.innerHeight * 0.7; // Ajusta según sea necesario

        if (description.getBoundingClientRect().top < triggerOffset) {
            description.classList.add('active');
        } else {
            description.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const homeContainer = document.querySelector('.home-container');
    homeContainer.classList.add('active'); // Agregar la clase active inmediatamente en la carga inicial
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.fade-in');

    window.addEventListener('scroll', function () {
        const triggerOffset = window.innerHeight * 0.7;

        sections.forEach(function (section) {
            const sectionOffset = section.getBoundingClientRect().top;

            if (sectionOffset < triggerOffset) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }

            const sectionBottom = section.getBoundingClientRect().bottom;
            if (sectionBottom < 0 || sectionBottom > window.innerHeight) {
                section.classList.add('inactive');
            } else {
                section.classList.remove('inactive');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.fade-in, .fade-out');

    window.addEventListener('scroll', function () {
        const triggerOffset = window.innerHeight * 0.7;

        sections.forEach(function (section) {
            const sectionOffset = section.getBoundingClientRect().top;

            if (sectionOffset < triggerOffset && !section.classList.contains('active')) {
                section.classList.add('active');
            } else if (sectionOffset >= triggerOffset && section.classList.contains('active')) {
                section.classList.remove('active');
            }

            const sectionBottom = section.getBoundingClientRect().bottom;
            if ((sectionBottom < 0 || sectionBottom > window.innerHeight) && !section.classList.contains('inactive')) {
                section.classList.add('inactive');
            } else if (sectionBottom >= 0 && sectionBottom <= window.innerHeight && section.classList.contains('inactive')) {
                section.classList.remove('inactive');
            }
        });
    });
});