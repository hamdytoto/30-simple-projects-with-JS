const btn = document.getElementById("watch-btn");
const trailerCont = document.querySelector(".trailer-container");
const closeIcon = document.getElementById("icon");
const videoEle = document.querySelector(".omar");
console.log(btn);

btn.addEventListener("click", () => {
	trailerCont.classList.toggle("active");
	videoEle.play();
	setTimeout(() => {
		videoEle.pause();
	}, 11 * 1000);
});

closeIcon.addEventListener("click", () => {
	trailerCont.classList.add("active");
	videoEle.pause();
});
