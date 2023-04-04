var modal = document.querySelector('#modal')

var button = document.querySelector('#button')

var toggleModal = function() {
  modal.classList.toggle('active')
}

button.addEventListener("click", toggleModal)

modal.addEventListener("click", toggleModal)
