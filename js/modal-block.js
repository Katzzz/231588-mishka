var order = document.querySelector(".goods__order");
var popup = document.querySelector(".modal-block");
var popupClose = popup.querySelector(".modal-block--closed");

if (order){
order.addEventListener("click", function(event) {
	var target = event.target;
	event.preventDefault();
		if (target.classList.contains("goods__btn")) {
      popup.classList.remove("modal-block--closed");
	    popup.classList.add("modal-block--show");
		}
	});
}

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-block--show")) {
			popup.classList.remove("modal-block--show");
		}
	}
});
