const textareaEl = document.querySelector("#textarea");
const totalcharacter = document.querySelector("#total-counter");
const remainingcChar = document.querySelector("#remain-counter");
textareaEl.addEventListener("keyup", () => {
	updateCounter();
});
updateCounter();

function updateCounter() {
	totalcharacter.innerHTML = textareaEl.value.length;
	remainingcChar.innerHTML =
		textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
