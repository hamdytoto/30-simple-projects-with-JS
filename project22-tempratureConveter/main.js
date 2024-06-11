function generateRandomColor() {
	let color = "#";
	let symbols = "123456789abcdef";
	for (let i = 0; i < 6; i++) {
		color += symbols[Math.floor(Math.random() * symbols.length)];
	}
	console.log(color);
	return color;
}

setInterval(() => {
	document.documentElement.style.setProperty(
		"--changeColor",
		generateRandomColor()
	);
}, 5000);

let inputs = document.querySelectorAll(".input");
inputs.forEach((element, index) => {
	element.addEventListener("change", () => {
		switch (element.id) {
			case "celisus":
				console.log("c");
				inputs[1].value = (+(element.value * 1.8) + 32).toFixed(2);
				inputs[2].value = (+element.value + 273.15).toFixed(2);
				break;
			case "fahrenheit":
				console.log("f");
				inputs[0].value = (+((element.value - 32) * 5) / 9).toFixed(2);
				inputs[2].value = (+((element.value - 32) * 5) / 9 + 273.15).toFixed(2);
				break;
			case "kelvin":
				inputs[0].value = (+element.value - 273.15).toFixed(2);
				inputs[1].value = (+(element.value - 273.15) * 1.8 + 32).toFixed(2);
				console.log("k");
				break;
			default:
				break;
		}
	});
});
