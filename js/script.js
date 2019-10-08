var modalFindUs = document.querySelector('.modal-window-find-us');
if (modalFindUs) {
	var modalFindUsClose = modalFindUs.querySelector('.modal-close');
	var modalName = modalFindUs.querySelector('.find-us-item-input-name');
	var modalMail = modalFindUs.querySelector('.find-us-item-input-mail');
	var modalText = modalFindUs.querySelector('.find-us-item-tarea');


	modalFindUs.addEventListener('submit', function (evt) {

		if (!modalName.value || !modalMail.value || !modalText.value) {
			evt.preventDefault();
			modalFindUs.classList.remove('modal-window-find-us-error');
			modalFindUs.offsetWidth = modalFindUs.offsetWidth;
			modalFindUs.classList.add('modal-window-find-us-error');
		}
	});
}
var findUsButton = document.querySelector('.open-find-us');
if (findUsButton) {
	findUsButton.addEventListener('click', function (evt) {
		evt.preventDefault();
		modalFindUs.classList.add("modal-window-find-us-show");
		modalName.focus();

		modalFindUsClose.addEventListener('click', function (evtClose) {
			evtClose.preventDefault();
			modalFindUs.classList.remove("modal-window-find-us-show");
			modalFindUs.classList.remove('modal-window-find-us-error');
		});
		window.addEventListener('keydown', function (evtKey) {
			if (evtKey.keyCode === 27) {
				evtKey.preventDefault();
				modalFindUs.classList.remove('modal-window-find-us-show');
				modalFindUs.classList.remove('modal-window-find-us-error');
			}
		});
	});
}


var mapButton = document.querySelector('.contacts-map-link');

var modalMap = document.querySelector('.modal-map');
if (modalMap) {
	var modalMapClose = modalMap.querySelector('.modal-close');
}
if (mapButton) {

	mapButton.addEventListener('click', function (evt) {

		evt.preventDefault();
		modalMap.classList.add('modal-map-show');

		modalMapClose.addEventListener('click', function (evtClose) {
			evt.preventDefault();
			modalMap.classList.remove('modal-map-show');
		})
		window.addEventListener('keydown', function (evtKey) {
			if (evtKey.keyCode === 27) {
				evtKey.preventDefault();
				modalMap.classList.remove('modal-map-show');
			}
		});
	})
}

var addCartLinks = document.querySelectorAll('.button-add-to-cart');
var cartWindow = document.querySelector('.modal-window');
if (cartWindow) {
	var cartWindowClose = cartWindow.querySelector('.modal-close');
}
if (addCartLinks) {
	for (var i = 0; i < addCartLinks.length; i++) {
		addCartLinks[i].addEventListener('click', function (evt) {
			evt.preventDefault();
			cartWindow.classList.add('modal-window-show');

			cartWindowClose.addEventListener('click', function (evtClose) {
				evt.preventDefault();
				cartWindow.classList.remove('modal-window-show');
			})

			window.addEventListener('keydown', function (evtKey) {
				if (evtKey.keyCode === 27) {
					evtKey.preventDefault();
					cartWindow.classList.remove('modal-window-show');
				}
			});
		})
	}
}