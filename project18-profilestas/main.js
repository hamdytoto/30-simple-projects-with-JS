let conunter = document.querySelectorAll("h2");
// addNewStas();
loadItems();
updatenums();
function updatenums() {
	conunter.forEach((ele) => {
		let startNum = 0;
		let finalNum = parseInt(ele.getAttribute("data-it"));
		let duration = Math.floor(1000 / finalNum);
		let counter = setInterval(() => {
			startNum = startNum + 1;
			ele.textContent = startNum;
			if (startNum == finalNum) {
				clearInterval(counter);
			}
		}, duration);
	});
}

document.getElementById("add").addEventListener("click", addNewStas);
function addNewStas() {
	let item = document.createElement("div");
	item.classList.add("cont","special");
	item.innerHTML = `<i class="fa-regular fa-star"></i>
   <h2 data-it="5">5</h2>
   <p>stars</p>`;
	document.querySelector(".container").appendChild(item);
    saveItems();
}
function saveItems() {
	let items = [];
	document.querySelectorAll(".special").forEach((item) => {
		items.push(item.innerHTML);
	});
	localStorage.setItem("items", JSON.stringify(items));
}
function loadItems() {
    let items = JSON.parse(localStorage.getItem("items"));
    if (items) {
        items.forEach((itemHTML) => {
            let item = document.createElement("div");
            item.classList.add("cont","special");
            item.innerHTML = itemHTML;
            document.querySelector(".container").appendChild(item);
        });
    }
    updatenums(); // Update numbers for the loaded items
}
