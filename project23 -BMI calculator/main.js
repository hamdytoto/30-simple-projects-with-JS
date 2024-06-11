let letters = document.querySelector(".letters").children;
let buttonEl = document.querySelector("#ComputeBMI");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let output = document.querySelector("#output");
console.log(letters);
let color = ["#89b9d7", "#76c5a5", "yellow", "orange", "#f0474c"];
let halat = ["underWeigth", "Normal", "Overweight", "Obese", "Extremely Obese"];
for (let i = 0; i < letters.length; i++) {
	letters[i].style.color = color[i];
}
// document.body.style.background=`linear-gradient`;
buttonEl.addEventListener("click", () => {
	let index = 0;
	output.value = (
		weight.value /
		(((height.value / 100) * height.value) / 100)
	).toFixed(2);
	if (output.value < 18.5) {
		output.style.color = color[0];
		index = 0;
	} else if (output.value >= 18.5 && output.value < 25) {
		output.style.color = color[1];
		index = 1;
	} else if (output.value >= 25 && output.value < 30) {
		output.style.color = color[2];
		index = 2;
	} else if (output.value >= 30 && output.value < 35) {
		output.style.color = color[3];
		index = 3;
	} else if (output.value > 35) {
		output.style.color = color[4];
		index = 4;
	}
	output.value = output.value + `  ${halat[index].toUpperCase()}`;
});
