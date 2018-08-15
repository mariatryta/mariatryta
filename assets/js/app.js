// Open and close menu on click
// const button = document.querySelector(".menu-icon"),
//          nav = document.querySelector(".main-nav");

// button.addEventListener("click", function () {
//     if (nav.style.display == 'none') {
//         nav.style.display = 'block';
//     } else {
//         nav.style.display = 'none';
//     }
// }, false);

// card hover to show 
let overlay = document.querySelectorAll(".project-hover");
let cards = document.querySelectorAll(".project-card");

cards.forEach(function(box, index) {
    box.addEventListener('mouseenter', function() {
        overlay[index].style.display = 'block';
    });
  });

cards.forEach(function(box, index) {
    box.addEventListener('mouseleave', function() {
        overlay[index].style.display = 'none';
    });
  });

// Modal 
const modalBtns = document.querySelectorAll('.modalBtn');
const closeBtn = document.querySelector('.closeBtn');
const modal = document.getElementById('modal');

closeBtn.addEventListener('click',closeModal);

for (var i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener('click', function() {
            modal.style.display='block';    
    });
}

function closeModal() {
    modal.style.display='none';        
}
