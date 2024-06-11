let bar = document.querySelector(".loading-bar-front");
let percent = document.querySelector(".percentage");
let i = 0;
loadingBar();
function loadingBar() {
	bar.style.width = `${i}%`;
	percent.innerHTML = `${i}%`;
    i++;
	if (i <= 100) {
		setTimeout(loadingBar, 20);
	}
}
