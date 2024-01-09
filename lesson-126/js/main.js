(function () {

    // Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth < 900)

            if (document.body.classList.contains('body--burger-opened')) {
                document.body.classList.remove('body--burger-opened')
            } else {
                document.body.classList.add('body--burger-opened')
            }

    }

    // Модалка

    const btnOpenModal = document.querySelector('.about__inner-button');
    const modal = document.querySelector('.modal')

    btnOpenModal.addEventListener('click', () => {
        document.body.classList.add('body--modal-opened');
    })

    modal.addEventListener('click', event => {
        const target = event.target
        if (target && target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
            document.body.classList.remove('body--modal-opened');
        }
    })

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            document.body.classList.remove('body--modal-opened');
        }
    })

    // Табы

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest(".tab-controls__link")

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href');
        const tabContent = document.querySelector(tabContentID);
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')

    }


    // Аккордеон 

    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget;
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;


            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        })
    })


    // Слайдер-галерея  


    const swiper = new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            451: {
                slidesPerView: 2,
            },
            601: {
                slidesPerView: 3,
            },

            801: {
                spaceBetween: 32,
            },

            1101: {
                slidesPerView: 4,
            }
        }

    });


    // Слайдер-отзывы  


    new Swiper('.testimonials__slider', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.testimonials__scrollbar',
            draggable: true,
        },

        breakpoints: {

            901: {
                slidesPerView: 1.5,
            },

            1201: {
                slidesPerView: 2.1,
            }
        }

    });


    // Маска для телефона  


    const telInputs = document.querySelectorAll('input[type="tel"]');

    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs)



})()
