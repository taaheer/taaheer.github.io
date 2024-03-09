document.addEventListener("DOMContentLoaded", function() {
  const modalButtons = document.querySelectorAll(".modal-button");
  const closeButtons = document.querySelectorAll(".close");
  
  modalButtons.forEach(button => {
      button.addEventListener("click", function() {
          const modalId = this.getAttribute("data-modal");
          const modal = document.getElementById("modal-" + modalId);
          modal.showModal();
          modal.scrollTop = 0;
      });
  });

  closeButtons.forEach(button => {
      button.addEventListener("click", function() {
          const modal = button.closest("dialog");
          modal.close();
      });
  });
});
