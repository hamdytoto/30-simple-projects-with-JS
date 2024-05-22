const colorCont = document.querySelector(".color-container");
const btn = document.querySelector("#butn");
const back = document.querySelector("#back");

back.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});
btn.addEventListener("click", () => {
	addColor();
	window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});
let colorNum = 10;
function getRandomHexColor() {
	const randomValue = () =>
		Math.floor(Math.random() * 256)
			.toString(16)
			.padStart(2, "0");
	const red = randomValue();
	const green = randomValue();
	const blue = randomValue();
	return `#${red}${green}${blue}`;
}

function addColor() {
	for (let index = 0; index < colorNum; index++) {
		const colorEl = document.createElement("div");
		colorEl.classList.add("color");
		colorCont.appendChild(colorEl);
		colorEl.style.backgroundColor = getRandomHexColor();
		colorEl.innerHTML = getRandomHexColor();
	}
}
addColor();
