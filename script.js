function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modal-image");
  modal.style.display = "block";
  modalImg.src = imageSrc;
  if (modalImg.classList.contains("square")) {
    modalImg.style.width = "25%";
    modalImg.style.height = "25%";
  } else {
    modalImg.style.width = "auto";
    modalImg.style.height = "auto";
  }
}
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
