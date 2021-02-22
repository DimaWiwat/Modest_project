// mobile menu

let mobileMenu = document.querySelector('.nav-mobile-menu');
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function() {
   mobileMenu.classList.toggle("active-menu");
   if(mobileMenu.classList.contains("active-menu")) {
      mainMenu.classList.add("active-menu");
   } else {
      mainMenu.classList.remove("active-menu");
   }  

})



// *** модальное окно 

let moreDetailsBtns = document.querySelectorAll(".details-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide")
}

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide")
}

moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click",function(e) {
        e.preventDefault();
        openModal()
    })
})

closeBtn.addEventListener("click",closeModal)



modal.addEventListener('click', function(e) {
   if(e.target === modal) {
       closeModal()
   }
})



function showModalByScroll() {
   if (window.pageYOffset > document.documentElement.scrollHeight/2) {
       openModal();
       window.removeEventListener("scroll", showModalByScroll)
   }
}

window.addEventListener("scroll",showModalByScroll)