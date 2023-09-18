const navbarContainer = document.getElementById("navbarContainer");
const responsiveContainer = document.getElementById("responsiveContainer");
const humberger = document.getElementById("humberger");
const menu = document.getElementById("menu");
const header = document.getElementById("header");
const faBars = document.querySelector(".fa-bars");

responsiveContainer.innerHTML = navbarContainer.innerHTML;

const navlinks = document.querySelectorAll("#navbarContainer li a");
const links = document.querySelectorAll("#menu #responsiveContainer li a");
var goTop = document.getElementById("gotop");

const removeActiveClass = () => {
	navlinks.forEach((link) => {
		link.classList.remove('active');
	})
}
navlinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		removeActiveClass();
		link.classList.toggle("active");
	})
})

links.forEach((link) => {
	link.addEventListener("click", () => {
		menu.classList.toggle("hidden");
	})
})

humberger.addEventListener("click", () => {
	menu.classList.toggle('hidden');
	faBars.classList.toggle(".fa-times");
})


const userTexts = document.getElementsByClassName('user-text');
const userPics = document.getElementsByClassName('user__profile');

function showReview() {
	for (userPic of userPics) {
		userPic.classList.remove("active");
	}
	for (userText of userTexts) {
		userText.classList.remove("active-text");
	}

	let i = Array.from(userPics).indexOf(event.target);

	userPics[i].classList.add('active');
	userTexts[i].classList.add('active-text');
}

const toggleBtn = document.getElementById('toggleBtn');

const card_1_front = document.querySelector("#card_1_front");
const card_1_back = document.querySelector("#card_1_back");

const card_2_front = document.querySelector("#card_2_front");
const card_2_back = document.querySelector("#card_2_back");

const card_3_front = document.querySelector("#card_3_front");
const card_3_back = document.querySelector("#card_3_back");

toggleBtn.addEventListener('change', () => {
	card_1_front.classList.toggle('-rotate-y-180');
	card_1_back.classList.toggle('rotate-y-180');

	card_2_front.classList.toggle('-rotate-y-180');
	card_2_back.classList.toggle('rotate-y-180');

	card_3_front.classList.toggle('-rotate-y-180');
	card_3_back.classList.toggle('rotate-y-180');

})


function aos_init() {
	AOS.init({
		duration: 1000,
		easing: "ease-in-out",
		once: true,
		mirror: false
	});
}
window.addEventListener('load', () => {
	aos_init();
})
window.addEventListener("scroll", () => {
	header.classList.toggle("bg-color-primary-dark", window.scrollY > 50);
})
window.addEventListener('scroll', () => {
	goTop.classList.toggle("active", window.scrollY > 10);
})
