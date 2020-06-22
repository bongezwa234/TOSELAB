const imageSlide = document.querySelector('.image-slide');
const imageImages = document.querySelectorAll('.image-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = imageImages[0].clientWidth;

imageSlide.style.transform = 'translatex('+ (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click', () => {
    if (counter >= imageImages.length -1)return;
    imageSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    imageSlide.style.transform = 'translatex('+ (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    imageSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    imageSlide.style.transform = 'translatex('+ (-size * counter) + 'px)';
})
imageSlide.addEventListener('transitionend', () => {
    if (imageImages[counter].id === 'lastClone') {
        imageSlide.style.transition = "none";
        counter = imageImages.length -2;
        imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (imageImages[counter].id === 'firstClone') {
        imageSlide.style.transition = "none";
        counter = imageImages.length - counter;
        imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

function validateTextBox() {
    var nameCheck = document.getElementById('name');
    if (nameCheck.value ==''){
        alert("Please enter your name");
        return false;
    }else if (surname.value =='') {
        alert("Please enter your surname");
        return false;
    }else if (email.value =='') {
        alert("Please enter your email");
        return false;
    }else if (phone.value =='') {
        alert("Please enter your phone number");
        return false;
    }else {
        alert("Form submitted")
    }

}