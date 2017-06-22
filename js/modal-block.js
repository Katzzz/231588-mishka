var order = document.querySelector(".goods__order");
var orderCatalog = document.querySelector(".video-block");
var popup = document.querySelector(".modal-block");
var popupClose = popup.querySelector(".modal-block--closed");
var overlay = document.querySelector(".overlay");

if (order) {
  order.addEventListener("click", function(event) {
    var target = event.target;
    event.preventDefault();
    if (target.classList.contains("goods__btn")) {
      popup.classList.remove("modal-block--closed");
      popup.classList.add("modal-block--show");
      overlay.classList.remove("overlay--close");
      overlay.classList.add("overlay--show");
    }
  });
}

if (orderCatalog) {
  orderCatalog.addEventListener("click", function(event) {
    var target = event.target;
    event.preventDefault();
    if (target.classList.contains("video-btn")) {
      popup.classList.remove("modal-block--closed");
      popup.classList.add("modal-block--show");
      overlay.classList.remove("overlay--close");
      overlay.classList.add("overlay--show");
    }
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-block--show"))
    popup.classList.remove("modal-block--show")
  }
  if (overlay.classList.contains("overlay--show")) {
    overlay.classList.remove("overlay--show");
  }
});
