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
