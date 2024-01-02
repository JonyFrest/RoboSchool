// function slideToLeft() {
//     var slideBar = document.querySelector('.slide_bar-treners');
//     var irinaSlide = document.getElementById('irinaSlide');
//     var lisaSlide = document.getElementById('lisaSlide');

//     slideBar.style.transform = 'translateX(-23.3%)'; // Ширина слайда + отступ

//     // Если Ирина видна, скрываем её
//     if (!irinaSlide.classList.contains('irina')) {
//         irinaSlide.classList.add('irina-hidden');
//     }

//     // Если Лиза скрыта, покажем её
//     if (lisaSlide.classList.contains('lisa')) {
//         lisaSlide.classList.remove('lisa');
//         lisaSlide.classList.add('lisa-on');
//     }
// }
/* --- */function slideToLeft() {
    var slideBar = document.querySelector('.slide_bar-treners');
    var irinaSlide = document.getElementById('irinaSlide');
    var lisaSlide = document.getElementById('lisaSlide');

    irinaSlide.style.marginLeft = '-380px';
    lisaSlide.style.marginLeft = '0';

    slideBar.style.transform = 'translateX(-23.3%)'; // Ширина слайда + отступ

    // Если Лиза скрыта, покажем её
    if (lisaSlide.classList.contains('irina-hidden')) {
        lisaSlide.classList.remove('irina-hidden');
        lisaSlide.classList.add('lisa-on');
    }

    // Добавляем плавную прокрутку
    setTimeout(() => {
        slideBar.style.transition = 'transform 0.5s ease-in-out';
        slideBar.style.transform = 'translateX(-23.3%)'; // Ширина слайда + отступ
    }, 50);
}

function slideToRight() {
    var slideBar = document.querySelector('.slide_bar-treners');
    var irinaSlide = document.getElementById('irinaSlide');
    var lisaSlide = document.getElementById('lisaSlide');

    irinaSlide.style.marginLeft = '0';
    lisaSlide.style.marginLeft = '380px';

    slideBar.style.transform = 'translateX(0)';

    // Если Ирина скрыта, покажем её
    if (irinaSlide.classList.contains('irina-hidden')) {
        irinaSlide.classList.remove('irina-hidden');
    }

    // Добавляем плавную прокрутку
    setTimeout(() => {
        slideBar.style.transition = 'transform 1.5s ease-in-out';
        slideBar.style.transform = 'translateX(0)';
    }, 5000);
}
