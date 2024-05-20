let testMonials = [
	{
		img: "https://images.ctfassets.net/pjshm78m9jt4/Author_emily-morgan/f3ebf8b933ab98e9f64a00ed7aafb9c9/importedImageAuthor_emily-morgan",
		name: " Emily Morgan",
		text: "I recently tried a delicious something to eat from apple. Their commitment to using fresh fruits really shines through in the quality and taste of their products. I highly recommend apple for anyone looking for a healthy and tasty snack option.",
	},
	{
		img: "https://imageio.forbes.com/specials-images/imageserve/922614948/New-Line-Cinema-And-Warner-Bros--Pictures---Game-Night--Premiere---Arrivals/0x0.jpg?format=jpg&crop=2111,1906,x0,y138,safe&width=960",
		name: "Samantha Reynolds",
		text: "I am blown away by the quality of the something to eat from apple. Their commitment to sourcing the freshest fruits really shines through in every bite. I highly recommend apple for anyone looking for delicious and nutritious options.",
	},
	{
		img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
		name: "John Doe",
		text: "I can always count on Will Smith for fresh and delicious items to eat that cater to men like me. Their attention to quality and diverse menu selection keeps me coming back for more!",
	},
	{
		img: "https://static.stereogum.com/uploads/2021/05/John-Davis-1622124628-1000x720.jpg",
		name: "John Davis",
		text: "I can't recommend Will Smith enough for their amazing something to eat. They cater to men like no other, ensuring top-notch quality and taste in every bite. Will Smith has truly set the bar high in the food industry.",
	},
];

const imagecont = document.querySelector("img");
console.log(imagecont);
const Textcont = document.querySelector(".testmonial-text");
const namecont = document.querySelector(".sayer");

let inx = 0;
UpdateTestmoinal();
function UpdateTestmoinal() {
	const { img, name, text } = testMonials[inx];
	imagecont.src = img;
	Textcont.innerHTML = text;
	namecont.innerHTML = name;
	inx++;
	if (inx >= testMonials.length) {
		inx = 0;
	}
	setTimeout(() => {
		UpdateTestmoinal();
	}, 5000);
}
