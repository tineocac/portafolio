// navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// certicates modals
const certicatesModals = document.querySelectorAll(".certificates-modal");

const seeCertificates = document.querySelectorAll(".certificates");

const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalclick) {
  certicatesModals[modalclick].classList.add("active");
};

seeCertificates.forEach((seeCertificates, i) => {
  seeCertificates.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtns) => {
  modalCloseBtns.addEventListener("click", () => {
    certicatesModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

const downloadCvs = document.querySelectorAll(".download");

const cvModals = document.querySelectorAll(".cv-modal");

var modalCv = function (modalclick) {
  cvModals[modalclick].classList.add("active");
};

downloadCvs.forEach((downloadCvs, i) => {
  downloadCvs.addEventListener("click", () => {
    modalCv(i);
  });
});

modalCloseBtns.forEach((modalCloseBtns) => {
  modalCloseBtns.addEventListener("click", () => {
    cvModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

// portfolio modals

const portfolioModel = document.querySelectorAll(".portfolio-model");

const imgCard = document.querySelectorAll(".img-card");

const portfolioCloseBtn = document.querySelectorAll(".portfolio-close-btn");

var modalPortfolio = function (portfolioModalclick) {
  portfolioModel[portfolioModalclick].classList.add("active");
};

imgCard.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    modalPortfolio(i);
  });
});

portfolioCloseBtn.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModel.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});

// website dark/light theme
const themeBtn = document.querySelector(".theme-btn")

themeBtn.addEventListener( "click", () => {
  document.body.classList.toggle("dark-theme")
  themeBtn.classList.toggle("sun")

  localStorage.setItem("saved-theme", getCurrentTheme())
  localStorage.setItem("saved-icon", getCurrentIcon())
})

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light"
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon"

const savedTheme = localStorage.getItem("saved-theme")
const savedIcon = localStorage.getItem("saved-icon")

if( savedTheme){
  document.body.classList[savedTheme === "dark" ? "add" : "remove"] ("dark-theme")
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"] ("sun")
}

// scrool to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn")

window.addEventListener("scroll", function(){
  scrollTopBtn.classList.toggle("active", window.scrollY > 500)
})

scrollTopBtn.addEventListener("click", () =>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

// navigation menu items active on page scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const scrollY = window.pageYOffset;

  sections.forEach( current => {
    let sectionHeight = current.offsetHeight
    let sectionTop = current.offsetTop - 50
    let id = current.getAttribute("id")

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
      document.querySelector(".nav-items a[href*=" + id +"]").classList.add("active")
    }
    else{
      document.querySelector(".nav-items a[href*=" + id +"]").classList.remove("active")
    }

  })
})

