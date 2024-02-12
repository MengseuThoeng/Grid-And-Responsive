function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modal-image");
  modal.style.display = "block";
  modalImg.src = imageSrc;

  // Check if the modal image has the "square" class
  if (modalImg.classList.contains("square")) {
    // Apply width and height styles to the image displayed in the modal
    modalImg.style.width = "25%";
    modalImg.style.height = "25%";
  } else {
    // Reset width and height styles if the image doesn't have the "square" class
    modalImg.style.width = "auto";
    modalImg.style.height = "auto";
  }
}
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  



  