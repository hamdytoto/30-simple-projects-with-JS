const container = document.querySelector(".container");
const dataInput = document.querySelector("input");
const submitButon = document.querySelector("button");

// careers = [];
// submitButon.addEventListener("click",()=>{
//     const data = dataInput.value ;
//     console.log(data);
//     const newValues = data.split(',').map(item => item.trim());
//     // console.log (newValues);
//     careers.push(...newValues);
// })
// console.log(newValues);

careers = ["Youtuber", "Freelancer", "Web-Developer", "Student", "Instructor"];
carrerIndex = 0;
characterIndex = 0;

UpdateText();
function UpdateText() {
	characterIndex++;
	container.innerHTML = ` <h2>I am ${
		careers[carrerIndex].slice(0, 1) === "I" ? "an" : "a"
	} ${careers[carrerIndex].slice(0, characterIndex)}</h2>`;
	if (characterIndex === careers[carrerIndex].length) {
		carrerIndex++;
		characterIndex = 0;
	}
	if (carrerIndex === careers.length) {
		carrerIndex = 0;
	}
	setTimeout(UpdateText, 400);
}
