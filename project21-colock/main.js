let Hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let creator = document.querySelector(".creator");
function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
function updateTime() {
	let currentDate = new Date();
	let hoursDeg = (Hours.style.transform = `rotate(${
		(currentDate.getHours() / 12) * 360
	}deg)`);
	let minutesdeg = (minutes.style.transform = `rotate(${
		(currentDate.getMinutes() / 60) * 360
	}deg)`);
	let secondsdeg = (seconds.style.transform = `rotate(${
		(currentDate.getSeconds() / 60) * 360
	}deg)`);
}
setInterval(() => {
	updateTime();
	creator.style.color = getRandomColor();
    seconds.style.backgroundColor=getRandomColor();
}, 1000);
