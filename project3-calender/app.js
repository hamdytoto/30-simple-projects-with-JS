const monthName = document.querySelector(".month-name");
const dayName = document.querySelector(".day-name");
const dayNumber = document.querySelector(".day-number");
const year = document.querySelector(".year-number");
let date = new Date();
let months = [
	"Januray",
	"febra",
	"Mars",
	"april",
	"May",
	"june",
	"julay",
	"august",
	"september",
	"october",
	"november",
	"december",
];
days = [
	"saturday",
	"sunday",
	"monday",
	"tuseday",
	"thursday",
	"wendsday",
	"friday",
];
monthName.innerHTML = months[date.getUTCMonth()]; 
monthName.innerHTML = date.toLocaleString("en",{month:"long"}); // anthoer way 
// dayName.innerHTML = days[date.getDay()].toUppercase(); 
dayName.innerHTML = date.toLocaleString("en",{weekday:"long"}); // another way 
dayNumber.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();