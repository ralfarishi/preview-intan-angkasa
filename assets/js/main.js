/**
 * Template Name: EstateAgency
 * Updated: May 30 2023 with Bootstrap v5.3.0
 * Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
	("use strict");

	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
		el = el.trim();
		if (all) {
			return [...document.querySelectorAll(el)];
		} else {
			return document.querySelector(el);
		}
	};

	/**
	 * Easy event listener function
	 */
	const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all);
		if (selectEl) {
			if (all) {
				selectEl.forEach((e) => e.addEventListener(type, listener));
			} else {
				selectEl.addEventListener(type, listener);
			}
		}
	};

	/**
	 * Easy on scroll event listener
	 */
	const onscroll = (el, listener) => {
		el.addEventListener("scroll", listener);
	};

	/**
	 * Toggle .navbar-reduce
	 */
	let selectHNavbar = select(".navbar-default");
	if (selectHNavbar) {
		onscroll(document, () => {
			if (window.scrollY > 100) {
				selectHNavbar.classList.add("navbar-reduce");
				selectHNavbar.classList.remove("navbar-trans");
			} else {
				selectHNavbar.classList.remove("navbar-reduce");
				selectHNavbar.classList.add("navbar-trans");
			}
		});
	}

	/**
	 * Back to top button
	 */
	let backtotop = select(".back-to-top");
	if (backtotop) {
		const toggleBacktotop = () => {
			if (window.scrollY > 100) {
				backtotop.classList.add("active");
			} else {
				backtotop.classList.remove("active");
			}
		};
		window.addEventListener("load", toggleBacktotop);
		onscroll(document, toggleBacktotop);
	}

	/**
	 * Preloader
	 */
	let preloader = select("#preloader");
	if (preloader) {
		window.addEventListener("load", () => {
			preloader.remove();
		});
	}

	/**
	 * Search window open/close
	 */
	let body = select("body");
	on("click", ".navbar-toggle-box", function (e) {
		e.preventDefault();
		body.classList.add("box-collapse-open");
		body.classList.remove("box-collapse-closed");
	});

	on("click", ".close-box-collapse", function (e) {
		e.preventDefault();
		body.classList.remove("box-collapse-open");
		body.classList.add("box-collapse-closed");
	});

	/**
	 * Toggle icon
	 */
	document.addEventListener("DOMContentLoaded", function () {
		var buttons = document.querySelectorAll(".btn-link");

		buttons.forEach(function (button) {
			button.addEventListener("click", function () {
				var toggleIcon = this.querySelector("i");

				if (toggleIcon.classList.contains("bi-chevron-down")) {
					toggleIcon.classList.remove("bi-chevron-down");
					toggleIcon.classList.add("bi-chevron-up");
					toggleIcon.style.transform = "rotate(180deg)";
				} else {
					toggleIcon.classList.remove("bi-chevron-up");
					toggleIcon.classList.add("bi-chevron-down");
					toggleIcon.style.transform = "rotate(0deg)";
				}

				var startTime = null;
				var duration = 300;

				function animate(time) {
					if (!startTime) startTime = time;
					var progress = (time - startTime) / duration;
					if (progress < 1) {
						requestAnimationFrame(animate);
					}
					var angle = 180 * progress;
					toggleIcon.style.transform = "rotate(" + angle + "deg)";
				}

				requestAnimationFrame(animate);
			});
		});
	});

	// fetch clients data from clients.json file
	document.addEventListener("DOMContentLoaded", function () {
		const clients = "assets/clients.json";
		var xhr = new XMLHttpRequest();

		xhr.open("GET", clients, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var data = JSON.parse(xhr.responseText);
				var clientList = data.data;

				clientList.forEach(function (client) {
					var imgSrc = "assets/img/clients/" + client.img;
					var clientName = client.name;

					var clientItem = document.createElement("div");
					clientItem.className = "swiper-slide";
					clientItem.innerHTML =
						'<img src="' +
						imgSrc +
						'" class="img-fluid" alt="' +
						clientName +
						'">';

					document.getElementById("clients-list").appendChild(clientItem);
				});
			}
		};
		xhr.send();
	});

	/**
	 * Intro Carousel
	 */
	new Swiper(".intro-carousel", {
		speed: 600,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
	});

	/**
	 * Clients Carousel
	 */
	new Swiper("#clients-carousel", {
		speed: 600,
		loop: true,
		autoplay: {
			delay: 1500,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		breakpoints: {
			320: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 20,
			},
		},
	});

	/**
	 * Property carousel
	 */
	new Swiper("#property-carousel", {
		speed: 600,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		pagination: {
			el: ".propery-carousel-pagination",
			type: "bullets",
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},

			1200: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});

	/**
	 * Hangar carousel
	 */
	new Swiper("#hangar-carousel", {
		speed: 600,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		pagination: {
			el: ".hangar-carousel-pagination",
			type: "bullets",
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},

			1200: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});

	/**
	 * Property Single carousel
	 */
	new Swiper("#item-single-carousel", {
		speed: 600,
		loop: false,
		autoplay: {
			delay: 6500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".item-single-carousel-pagination",
			type: "bullets",
			clickable: true,
		},
	});

	/**
	 * News carousel
	 */
	new Swiper("#news-carousel", {
		speed: 600,
		loop: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		pagination: {
			el: ".news-carousel-pagination",
			type: "bullets",
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},

			1200: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});

	const glightbox = GLightbox({
		selector: ".glightbox",
	});
})();
