const inputEl = document.querySelector(".input");
console.log(inputEl.checked);
const bodyEl = document.querySelector("body");
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();
inputEl.addEventListener("input", () => {
	updateBody();
	updateLocalStorage();
    setTimeout(addNamde,500);
});
function updateBody() {
	if (inputEl.checked) {
		bodyEl.style.background = "black";
	} else {
		bodyEl.style.background = "white";
	}
}
function updateLocalStorage() {
	localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

function addNamde() {
	const nameFeild = document.querySelector(".write");
	nameFeild.innerHTML = "done by <sub>hamdytoto</sub>";
    nameFeild.animate(newspaperSpinning,newspaperTiming);
}
const newspaperSpinning = [
    { transform: "translateY(10px)", opacity: 0 }, // initial state
    { transform: "translateY(0px)", opacity: 1 } // final state
  ];

const newspaperTiming = {
    duration: 2000,
    iterations: 1,
    easing: "ease-out" // add a smooth easing function
  };

