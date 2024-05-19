const mybtn = document.querySelector(".btn");
mybtn.addEventListener("mouseover", (event) => {
	let x = event.pageX - mybtn.offsetLeft;
	let y = event.pageY - mybtn.offsetTop;
	mybtn.style.setProperty("--xpos", x + "px");
	mybtn.style.setProperty("--ypos", y + "px");
});
