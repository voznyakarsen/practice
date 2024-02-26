document.addEventListener('DOMContentLoaded', function() {
    var menuElement = document.querySelector('.homepage-text08');

 
    menuElement.addEventListener('mouseenter', function() { 
        menuElement.classList.add('active');
    });


    menuElement.addEventListener('mouseleave', function() {
        menuElement.classList.remove('active');
    });

    menuElement.addEventListener('click', function() {
        window.location.href = 'https://practicevozars.miy.link/?post_type=product';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var deliveryElement = document.querySelector('.homepage-text10');

    deliveryElement.addEventListener('mouseenter', function() {
        deliveryElement.classList.add('active');
    });

    deliveryElement.addEventListener('mouseleave', function() {
        deliveryElement.classList.remove('active');
    });

    deliveryElement.addEventListener('click', function() {
        window.location.href = 'https://practicevozars.miy.link/?page_id=202';
    });

    deliveryElement.classList.add('delivery-cursor');
});
