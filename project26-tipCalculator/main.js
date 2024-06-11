let buttonEl = document.getElementById("buttonEl");
let amount = document.querySelector("#amount");
let tipPercentage = document.querySelector("#tipPercentage");
let result = document.querySelector(".total");
buttonEl.addEventListener("click", () => {
	let T = +amount.value + (amount.value * tipPercentage.value) / 100;
	result.innerHTML = `Total is : ${T} $`;
	if (T > 2000) {
		document.documentElement.style.setProperty("--main-color", "red");
	}
	amount.value = null;
	tipPercentage.value = null;
	console.log("hamdy");
});
