async function getEmjis() {
	let response = await fetch(
		"https://emoji-api.com/emojis?access_key=aa5524fd1b5f28e7f42f60b5a207dc3a1186d3c0"
	);
	data = await response.json();
	for (let i = 0; i < 1000; i++) {
		Emojis.push({
			emojyShape: data[i].character,
			emojyName: data[i].unicodeName,
		});
	}
	console.log(Emojis);
}
getEmjis();
createElements();
function createElements() {
	let title = document.createElement("h2");
	let EmojiCont = document.createElement("div");
	let EmojiBtn = document.createElement("button");
	let EmojiName = document.createElement("p");
	let imgEl = document.createElement("img");
	imgEl.src = "./logo.svg";
	imgEl.alt = "logo";
	document.body.appendChild(title);
	document.body.appendChild(EmojiCont);
	EmojiCont.appendChild(EmojiBtn);
	EmojiCont.appendChild(EmojiName);
	document.body.style.cssText =
		"display:flex;justify-content:center;align-items:center;flex-direction:column;height:100vh;font-family:cursive;";
	title.innerHTML = "Random Emoji";
	title.style.cssText = "font-size:30px;";
	EmojiCont.style.cssText =
		"height:300px;width:300px;display:flex;justify-content:space-between;align-items:center;flex-direction:column;padding:20px";
	EmojiBtn.style.cssText =
		"padding:20px;border:none;background-color:none; width:300px; height:300px";
	EmojiName.style.cssText="font-size:30px";
	EmojiBtn.addEventListener("click", () => {
		let randomNum = Math.floor(Math.random() * Emojis.length);
		EmojiBtn.innerText = Emojis[randomNum].emojyShape;
		EmojiName.innerHTML = Emojis[randomNum].emojyName;
	});
}
const Emojis = [];
