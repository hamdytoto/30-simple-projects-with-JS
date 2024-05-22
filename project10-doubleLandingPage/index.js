const content = document.querySelector(".container");

const handleMouseEvent = (event) => {
  const { type, target } = event;
  const isMouseOver = type === "mouseover";
  const className = target.classList.contains("left") ? "active-left" : "active-right";

  content.classList.toggle(className, isMouseOver);
};

content.addEventListener("mouseover", handleMouseEvent);
content.addEventListener("mouseout", handleMouseEvent);

// const content = document.querySelector(".container");
// const leftEl = document.querySelector(".left");
// const rightEl = document.querySelector(".right");

// leftEl.addEventListener("mouseover", () => {
// 	content.classList.add("active-left");
// });
// leftEl.addEventListener("mouseout", () => {
// 	content.classList.remove("active-left");
// });
// rightEl.addEventListener("mouseover", () => {
// 	content.classList.add("active-right");
// });
// rightEl.addEventListener("mouseout", () => {
// 	content.classList.remove("active-right");
// });
