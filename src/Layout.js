import { Outlet } from "react-router-dom";
import FooterComponent from "./Components/Footer/Footer";
import HeaderComponent from "./Components/Header/Header";

// PRACTICE
// const name = ["Anakin Skywalker", "Obi-Wan Kenobi"];
// const moreNames = ["Yoda", "Mace Windu"];
// moreNames.push("Ashoka Tano");

// const joinedName = [...name, "Qui-Gon Jinn"];
// console.log(name);
// console.log(joinedName);
// console.log(joinedName.concat(moreNames).join(", "));
// console.log(joinedName.pop().toUpperCase().split(" ").join("-"));
// console.log(moreNames);

// const obj = { name: "Anakin Skywalker", race: "Jedi", gender: "male" };
// const clone = { ...obj, hair: "brown" };
// console.log(obj, clone);

// function increaseNumber(num) {
//   const randomNumber = Math.ceil(Math.random() * 10);
//   // console.log(randomNumber);
//   return num + randomNumber;
// }

// console.log(increaseNumber(5));
// console.log(increaseNumber(8));
// console.log(increaseNumber(47));
// console.log(increaseNumber(492));

// const jediObjArray = [
//   {
//     id: 1,
//     name: "Anakin Skywalker",
//     race: "human",
//     lightsabercolor: "blue",
//   },
//   {
//     id: 2,
//     name: "Obi-Wan Kenobi",
//     race: "human",
//     lightsabercolor: "blue",
//   },
//   {
//     id: 3,
//     name: "Yoda",
//     race: "jedi",
//     lightsabercolor: "green",
//   },
//   {
//     id: 4,
//     name: "Mace Windu",
//     race: "jedi",
//     lightsabercolor: "purple",
//   },
//   {
//     id: 5,
//     name: "Qui-Gon Jinn",
//     race: "human",
//     lightsabercolor: "green",
//   },
// ];

// const findJedi = (name) => {
//   const result = jediObjArray.find((jedi) => jedi.name === name);
//   return result;
// };

// const findJedi2 = (name) => jediObjArray.filter((jedi) => jedi.name === name);

// const findJedi3 = (name) => {
//   const searchedJedi = jediObjArray.find((jedi) => jedi.name === name);
//   const otherJedi = jediObjArray.filter((jedi) => jedi.name !== name);
//   return [searchedJedi, otherJedi];
// };

// console.log(findJedi("Qui-Gon Jinn"));
// console.log(findJedi2("Obi-Wan Kenobi"));
// console.log(findJedi3("Anakin Skywalker"));

// const addJediCharacter = (name, race, lightsabercolor) => {
//   const id = jediObjArray.length + 1;
//   const newJedi = {
//     id: id,
//     name: name,
//     race: race,
//     lightsabercolor: lightsabercolor,
//   };
//   const updatedJediArray = jediObjArray.push(newJedi);
//   return updatedJediArray;
// };

// addJediCharacter("Paul Morrow", "human", "blue");
// addJediCharacter("Ahsoka Tano", "Togruta", "white");

// console.log(jediObjArray.map((jedi) => jedi.name.toUpperCase().split(" ")[0]));

// const practiceObj = {
//   name: "Sally",
//   age: 35,
//   gender: "female",
//   alive: true,
// };

// const practiceObjClone = {
//   ...practiceObj,
//   happy: true,
// };
// const randomKey = 'age';
// console.log(practiceObjClone[randomKey]);
// console.log(practiceObjClone.name.toLowerCase());

// practiceObj.age > 30 ? console.log(true) : console.log(false);
// practiceObj.alive
//   ? console.log("alive and breathing")
//   : console.log("you are dead");

// const person = { name: "paul-morrow" };
// const filters = {
//   desluggify: (x) => x.replace("-", " "),
//   uppercase: (x) => x.toUpperCase(),
// };

// const input = "name | desluggify | uppercase";

// const sections = input.split("|").map((x) => x.trim());
// const sectionsAlt = input.split(" | ");
// const ref = person[sections[0]];
// const output = sections.slice(1).reduce((prev, next) => {
//   if (filters[next]) {
//     return filters[next].call(null, prev);
//   }
//   return prev;
// }, ref);
//www.youtube.com/watch?v=mSBnJvHtgD0
// console.log(output);

// const numbers = [1,4,3,2,56,0];
// const sortedNumbers = [...numbers].sort();
// const sortedNumbers = numbers.toSorted();
// const numbersPlus1 = numbers.map(num => num + 1);
// console.log({numbers, sortedNumbers, numbersPlus1});

// https://jsfiddle.net/

const zooAnimals = [
  {
    animal_name: "Jackal, asiatic",
    population: 5,
    scientific_name: "Canis aureus",
    state: "Kentucky",
  },
  {
    animal_name: "Screamer, southern",
    population: 1,
    scientific_name: "Chauna torquata",
    state: "Alabama",
  },
  {
    animal_name: "White spoonbill",
    population: 8,
    scientific_name: "Platalea leucordia",
    state: "Georgia",
  },
  {
    animal_name: "White-cheeked pintail",
    population: 1,
    scientific_name: "Anas bahamensis",
    state: "Oregon",
  },
  {
    animal_name: "Black-backed jackal",
    population: 2,
    scientific_name: "Canis mesomelas",
    state: "Washington",
  },
  {
    animal_name: "Brolga crane",
    population: 9,
    scientific_name: "Grus rubicundus",
    state: "New Mexico",
  },
  {
    animal_name: "Common melba finch",
    population: 5,
    scientific_name: "Pytilia melba",
    state: "Pennsylvania",
  },
  {
    animal_name: "Pampa gray fox",
    population: 10,
    scientific_name: "Pseudalopex gymnocercus",
    state: "Connecticut",
  },
  {
    animal_name: "Hawk-eagle, crowned",
    population: 10,
    scientific_name: "Spizaetus coronatus",
    state: "Florida",
  },
  {
    animal_name: "Australian pelican",
    population: 5,
    scientific_name: "Pelecanus conspicillatus",
    state: "West Virginia",
  },
];

const filterZooAnimals = (array) => {
  const animals = array.filter((animal) => animal.population === 5);
  return animals;
};

const getAnimalNames = (array) => {
  const animalNames = array.map((animal) =>
    animal.animal_name.length ? animal : null
  );
  return animalNames;
};

const interpolatedAnimals = (array) => {
  const animalNamesStringArray = [];
  array.forEach((animal) =>
    animalNamesStringArray.push(
      `name: ${animal.animal_name
        .split(", ")
        .join("/")}, scientificname: ${animal.scientific_name
        .split(", ")
        .join("/")}`
    )
  );
  return animalNamesStringArray;
};

console.log(filterZooAnimals(zooAnimals));
console.log(getAnimalNames(zooAnimals));
console.log(interpolatedAnimals(zooAnimals));

///////////////////////////////////////////////////////////

export default function Layout() {
  return (
    <div className="App">
      <div className="headercomponent-navbarcomponent-container">
        <HeaderComponent />
      </div>
      <div className="cardcontainer-container">
        <div className="cardcontainercomponent-container">
          <Outlet />
        </div>
      </div>
      <div className="footercomponent-container">
        <FooterComponent />
      </div>
    </div>
  );
}
