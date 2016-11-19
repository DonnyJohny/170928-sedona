
  var close = document.querySelector(".find-form");
  var open = document.querySelector(".open-form");
  close.classList.add("close-form");
  open.addEventListener("click", function(event) {
    event.preventDefault();
    close.classList.toggle("close-form");
  });
