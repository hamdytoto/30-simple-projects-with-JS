const bodyEl = document.querySelector("body");
function getRandomColor() {
	const r = Math.floor(Math.random() * 1);
	const g = Math.floor(Math.random() * 101);
	const b = Math.floor(Math.random() * 101);

	const rgbToHex = (r, g, b) => {
		const componentToHex = (c) => {
			const hex = c.toString(16);
			return hex.length === 1 ? "0" + hex : hex;
		};
		return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
	};
	return rgbToHex(r, g, b);
}
setInterval(() => {
	document.body.style.backgroundColor = getRandomColor();
}, 4000);

const images = [
	"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-256.png",
	"https://cdn2.iconfinder.com/data/icons/party-new-years/128/Party_Newyears_Ballon-256.png",
	"https://cdn2.iconfinder.com/data/icons/color-doodle-wedding/32/check_mark_complete_done_good_heart_ok_valentine-256.png",
	"https://cdn1.iconfinder.com/data/icons/free-love-valentine-s-set/128/Artboard_1527-512.png",
	"https://cdn2.iconfinder.com/data/icons/love-1-1/512/love-heart-romantic-marriage-26-256.png",
];
function getRandomImage() {
	// Generate a random index based on the length of the images array
	const randomIndex = Math.floor(Math.random() * images.length);
	return images[randomIndex];
}

bodyEl.addEventListener("mousemove", (Event) => {
	const spanE = document.createElement("span");
	spanE.style.backgroundImage = `url(${getRandomImage()})`;
	spanE.style.left = Event.offsetX + "px";
	spanE.style.top = Event.offsetY + "px";
	const size = Math.random() * 100;
	// console.log (size);
	bodyEl.appendChild(spanE);
	spanE.style.width = size + "px";
	spanE.style.height = size + "px";
	setTimeout(() => {
		spanE.remove();
	}, 3000);
});
