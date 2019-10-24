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

const profPlum = {
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
  occupation: "Servant"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: 10
}

const knife = {
  name: "Knife",
  weight: 5
}

const candleStick = {
  name: "Candlestick",
  weight: 8
}

const dumbbell = {
  name: "Dunmbbell",
  weight: 30
}

const poison = {
  name: "Poison",
  weight: 2
}

const axe = {
  name: "Axe",
  weight: 15
}

const bat = {
  name: "Bat",
  weight: 12
}

const trophy = {
  name: "Trophy",
  weight: 18
}

const pistol = {
  name: "Pistol",
  weight: 16
}



// ****THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.***

/*//Vet ej hur det ska se ut här, ej object men vadå?
const dinningRoom;
const conservatory;
const kitchen;
const study;
const library;
const billiardRoom;
const lounge;
const ballroom;
const hall;
const spa;
const livingRoom;
const observatory;
const theater;
const guestHouse;
const patio;
*/




// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  //profPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
]
//suspects.forEach(suspects => {
console.log(suspects);
//});

const weapons = [
  rope,
  knife,
  candleStick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]
//weapons.forEach(weapons => {
console.log(weapons);
//});

const rooms = [
  "Dinning Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "ballroom",
  "hall",
  "spa",
  "livingRoom",
  "observatory",
  "theater",
  "guestHouse",
  "patio"
]

//rooms.forEach(rooms => {
console.log(rooms, suspects, weapons);
//});


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]

}
//randomSelector();
//console.log(randomSelector)
/*
const randomSelectorSuspects = (suspectsGroup) => {
  return suspectsGroup[Math.floor(Math.random() * suspectsGroup.length)];
};

const randomSelectorWeapons = (weaponsGroup) => {
  return weaponsGroup[Math.floor(Math.random() * weaponsGroup.length)];
};

const randomSelectorRooms = (roomsGroup) => {
  return roomsGroup[Math.floor(Math.random() * roomsGroup.length)];
}; */

//console.log(randomSelector(suspects).name);
//console.log(randomSelector(weapons).name);
//console.log(randomSelecto(rooms));



// *****CREATE AN OBJECT THAT KEEPS THE MYSTERY.*****
// ****With a killer, a weapon and a room.****
// *****The values will be set later.****
let mystery = {
  killer: "",
  weapon: "",
  room: "",

};

//*****  FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER. ****
// ***** This function will be invoked when you click on the killer card. *****
const pickKiller = () => {
  //****This will randomly select a killer from the suspects. And add that to the mystery object.*****/
  //the mystery object.
  mystery.killer = randomSelector(suspects);

  // ****This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.*****
  const theKiller = document.getElementById("killer");
  const theKillerName = document.getElementById("killerName");
  const theKillerAge = document.getElementById("killerAge");
  const thekillerOccupation = document.getElementById("killerOccupation");
  const theKillerImage = document.getElementById("killerImage");
  const theKillerDescription = document.getElementById("killerDescription");


  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML = mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerAge.innerHTML = mystery.killer.age
  thekillerOccupation.innerHTML = mystery.killer.occupation
  theKillerImage.src = mystery.killer.image
  theKillerDescription.innerHTML = mystery.killer.description
};
//pickKiller();

// **** CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.*****
const pickWeapon = () => {
  // ****This will randomly select a weapon from the weapons. And add that to the mystery object****
  mystery.weapon = randomSelector(weapons);

  // ****This will change the background color of the card to the one connected to the chosen weapon and show the name of the weapon.*****
  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")

  //theWeapon.style.background = mystery.weapon.color  //to change color of the card
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
};
//pickWeapon();

const pickRoom = () => {
  //****This will randomly select a killer from the suspects. And add that to the mystery object.*****/
  mystery.room = randomSelector(rooms)

  // ****This will change the background color of the card to the one connected to the chosen room and show the name of the room.*****
  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

  //theRoom.style.background = mystery.room.color //to change color of the card
  theRoomName.innerHTML = mystery.room
};
//pickRoom();



// *****CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:****
const revealMystery = () => {
  document.getElementById("mystery").innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
  //console.log(`The murder was committed by ${killer}, in the ${room} with a ${weapon}.`)

}
// ***'The murder was committed by Jacob Green, in the living room with a rope.'***
//document.getElementById('mystery').addEventListener('click', revealMystery)  //not nessesary if you have a onclick in index.HTML
//document.getElementById('mystery').onclick(revealMystery) does the same thing as .addEventListener