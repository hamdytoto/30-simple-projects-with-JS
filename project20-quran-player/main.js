const audioes = document.querySelectorAll("#audioel");
const buttons =document.querySelectorAll("button");
console.log(buttons);
console.log(audioes);

buttons.forEach((e , i)=>{
    e.addEventListener("click",()=>{
       audioes[i].play();
    })
})


// some enhancement using chat GPT

// const audioes = document.querySelectorAll("#audioel");
// const buttons = document.querySelectorAll("button");
// let currentlyPlaying = null;

// buttons.forEach((e, i) => {
//     e.addEventListener("click", () => {
//         // If there is an audio element currently playing, pause it
//         if (currentlyPlaying && currentlyPlaying !== audioes[i]) {
//             currentlyPlaying.pause();
//             currentlyPlaying.currentTime = 0;  // Reset the time to the start
//         }

//         // Play the clicked audio element
//         audioes[i].play();
//         currentlyPlaying = audioes[i];
//     });
// });

