// STAR WARS PROJECT CODE

let characterName = document.getElementById("name");
let height = document.getElementById("height");
let hair_color = document.getElementById("hair_color");
let eye_color = document.getElementById("eye_color");
let homeworld = document.getElementById("homeworld");

const button = document.querySelector(".btn");
button.addEventListener("click", (e) => {
  const randomCharacter = Math.floor(Math.random() * 80);
  characterName.innerHTML = `<em>Loading...</em>`;
  height.innerHTML = `<em>Loading...</em>`;
  hair_color.innerHTML = `<em>Loading...</em>`;
  eye_color.innerHTML = `<em>Loading...</em>`;
  homeworld.innerHTML = `<em>Loading...</em>`;

  fetch(`https://swapi.dev/api/people/${randomCharacter}/`)
    .then((Response) => Response.json())
    .then((character) => {
      characterName.innerHTML = `${character.name}`;
      height.innerHTML = `${character.height}`;
      hair_color.innerHTML = `${character.hair_color}`;
      eye_color.innerHTML = `${character.eye_color}`;
      // console.log(character.homeworld);
      fetch(character.homeworld)
        .then((Response) => Response.json())
        .then((planet) => {
          let home_world = planet.name;
          homeworld.innerHTML = `${home_world}`;
        });

      // console.log(homeworld);
    });
});

//GUESSING GAME

// while (true) {
//   let game = prompt("Guess the number between random numbers of 1-10");
//   game = Number(game);
//   let randomNumber = Math.floor(Math.random() * 10);

//   if (game === randomNumber) {
//     alert("you Win");
//     break;
//   } else {
//     alert("Try again!!");
//   }

//   console.log(randomNumber);
// }
