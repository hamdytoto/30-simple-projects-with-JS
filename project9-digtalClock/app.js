const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutess");
const seconds = document.querySelector(".second");
const apmp = document.querySelector(".apm");

function updateTime() {
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    h = h % 12 || 12; // Convert 24-hour format to 12-hour format

    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    apmp.innerHTML = time.getHours() >= 12 ? "PM" : "AM";
}

setInterval(updateTime, 1000);

updateTime(); // Initial call to display the time immediately
 
// const hours = document.querySelector(".hours");
// const minutes = document.querySelector(".minutess");
// const second = document.querySelector(".second");
// const apmp = document.querySelector(".apm");
// const time = new Date();
// function updateTime() {
// 	let h = time.getHours();                                    // the old one was with problem
// 	let m = time.getMinutes();
// 	let s = time.getSeconds();

// 	m = m < 10 ? "0" + m : m;
// 	s = s < 10 ? "0" + s : s;
// 	h = h < 10 ? "0" + h : h;

// 	if (h > 12) {
// 		hours.innerHTML = h - 12;
// 		apmp.innerHTML = "PM";
// 	} else {
// 		hours.innerHTML = h;
// 	}

// 	minutes.innerHTML = m;
// 	second.innerHTML = s;
// }
// setTimeout(() => {
//     updateTime();                // here was the problem ;
// }, 1000);

// updateTime();
// // console.log(hours);
