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
