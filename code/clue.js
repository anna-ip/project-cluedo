// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}
const professorPlum = {
  firstName: "Victor ",
  lastName: "Plum",
  color: "Plum",
  description: "He.....",
  age: 40,
  image: "assets/plum.png",
  occupation: "Professor"
}
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "Red",
  description: "She....",
  age: 30,
  image: "assets/scarlet.png",
  occupation: ""
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "Blue",
  description: "She",
  age: 70,
  image: "assets/peacock.png",
  occupation: ""
}
const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "Yellow",
  description: "He...",
  age: 63,
  image: "assets/mustard.png",
  occupation: "Military"
}
const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "Pink",
  description: "She....",
  age: 54,
  image: "assets/white.png",
  occupation: "servant"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10
}
const dnife = {
  name: "knife",
  weight: ""
}
const dandleStick = {
  name: "candleStick",
  weight: ""
}
const dumbbell = {
  name: "dunmbbell",
  weight: ""
}
const poison = {
  name: "poison",
  weight: ""
}
const axe = {
  name: "axe",
  weight: ""
}
const Bat = {
  name: "bat",
  weight: ""
}
const trophy = {
  name: "trophy",
  weight: ""
}
const pistol = {
  name: "pistol",
  weight: ""
}



// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const rooms = [
  dinnigRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballRoom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  house,
  patio
]

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]

const weapons = []

const rooms = []

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
