let bottomContainer = document.querySelector(".bottom-container");
let navBar = document.querySelector(".navbar");
let lorem = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
					adipisci ratione dolore natus id? Aut dolor cumque, delectus inventore
					quae quo expedita deleniti aliquid pariatur tempore voluptates
					voluptatem nam provident enim labore. Tenetur cupiditate iure
					molestias quia, et facere sunt minima nihil! Nemo iste rerum explicabo
					voluptates molestiae blanditiis illum velit odio ab, ratione quisquam
					dolores temporibus, culpa quia reprehenderit nostrum suscipit
					obcaecati, voluptatibus provident! Quod exercitationem cum, deleniti
					laudantium recusandae dolorum sed eum nostrum fuga illum odit
					voluptatem eaque quaerat, eligendi minima consequatur magnam a, nisi
					voluptatibus! Maiores amet id a, officiis suscipit reiciendis
					molestiae tempora recusandae. Temporibus, adipisci?`;
for (let i = 0; i < 5; i++) {
	let paragrahp = document.createElement("p");
	paragrahp.innerHTML = lorem;
	paragrahp.classList.add("text");
	bottomContainer.appendChild(paragrahp);
}
console.log(bottomContainer.offsetTop);
window.addEventListener("scroll", () => {
	if (window.scrollY > bottomContainer.offsetTop - navBar.offsetHeight) {
		navBar.classList.add("active");
	} else {
		navBar.classList.remove("active");
	}
});
