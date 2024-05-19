const imagesContainer = document.querySelector(".img-container");
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
	createMoreImg();
});

function createMoreImg() {
	for (let index = 0; index < 8; index++) {
		const img = document.createElement("img");
		img.src = `https://picsum.photos/300?random=${Math.floor(
			Math.random() * 1000
		)}`;
		imagesContainer.appendChild(img);
	}
}
