let startbtn = document.querySelector("#start");
let stopbtn = document.querySelector("#stop");
let resettbtn = document.querySelector("#reset");
let timecont = document.querySelector(".time");
let alertt = document.createElement("div");
let imgs = document.createElement("img");
let video = document.createElement("video");
video.src='video.mp4';

let timeLeft =10;
let interval;
updateTime();

function updateTime() {
	let minutes = Math.floor(timeLeft / 60);
	let seconds = timeLeft % 60;
	timecont.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
		.toString()
		.padStart(2, "0")}`;
}

function startTimer() {
	if (!interval) {
		interval = setInterval(() => {
			timeLeft--;
			updateTime();
			if (timeLeft ===0) {
				timecont.style.color = "red";
				// let alertt = document.createElement("div");
				// let imgs = document.createElement("img");
				imgs.src =
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDx6Xz3lyW7144W__qbpLP-GUItMC2mo_oRgb9U0ohQ&s";
				alertt.innerHTML = "برافو عليك استمر ";
				alertt.style.fontFamily = "Amiri, Arial, sans-serif";
				alertt.style.fontSize = "30px";
				alertt.style.color = "red";
				document.querySelector(".container").appendChild(alertt);
				// document.querySelector(".container").appendChild(imgs);
				document.querySelector(".container").appendChild(video);
                video.play();
                video.muted=false;
			}
			if (timeLeft <= 0) {
				clearInterval(interval);
				interval = null;
				timecont.style.color = "black";
				timeLeft = 1500;
				updateTime();
				// alert("Time's up!");
			}
		}, 1000);
		startbtn.disabled = true;
		stopbtn.disabled = false;
	}
}

function stopTimer() {
	clearInterval(interval);
	interval = null;
	startbtn.disabled = false;
	stopbtn.disabled = true;
}

function resetTimer() {
	clearInterval(interval);
	interval = null;
	timeLeft = 1500;
	updateTime();
	startbtn.disabled = false;
	stopbtn.disabled = true;
	timecont.style.color = "black";
	alertt.remove();
	imgs.remove();
    video.remove();
}

startbtn.addEventListener("click", startTimer);
stopbtn.addEventListener("click", stopTimer);
resettbtn.addEventListener("click", resetTimer);