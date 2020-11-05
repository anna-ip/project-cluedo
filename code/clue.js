//People
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
}

const profPlum = {
  firstName: 'Victor ',
  lastName: 'Plum',
  color: 'Plum',
  description: 'He always has an answer to everything.',
  age: 40,
  image: 'assets/plum.png',
  occupation: 'Professor',
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'Red',
  description: 'She can talks to everyones.',
  age: 30,
  image: 'assets/scarlet.png',
  occupation: '',
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'Blue',
  description: 'She loves bribes',
  age: 70,
  image: 'assets/peacock.png',
  occupation: '',
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'Yellow',
  description: 'He is always secretive',
  age: 63,
  image: 'assets/mustard.png',
  occupation: 'Military',
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'Pink',
  description: 'She is seeing everything',
  age: 54,
  image: 'assets/white.png',
  occupation: 'Servant',
}

//Objects
const rope = {
  name: 'Rope',
  weight: 10,
  image: 'assets/my-icons-collection/png/002-gallows.png',
}

const knife = {
  name: 'Knife',
  weight: 5,
  image: 'assets/my-icons-collection/png/001-knife.png',
}

const candleStick = {
  name: 'Candlestick',
  weight: 8,
  image: 'assets/my-icons-collection/png/003-candlestick.png',
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 30,
  image: 'assets/my-icons-collection/png/004-dumbbell.png',
}

const poison = {
  name: 'Poison',
  weight: 2,
  image: 'assets/my-icons-collection/png/005-poison.png',
}

const axe = {
  name: 'Axe',
  weight: 15,
  image: 'assets/my-icons-collection/png/006-axe.png',
}

const bat = {
  name: 'Bat',
  weight: 12,
  image: 'assets/my-icons-collection/png/007-bat.png',
}

const trophy = {
  name: 'Trophy',
  weight: 18,
  image: 'assets/my-icons-collection/png/008-trophy.png',
}

const pistol = {
  name: 'Pistol',
  weight: 16,
  image: 'assets/my-icons-collection/png/009-gun.png',
}

const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite,
]
console.log(suspects)

const weapons = [
  rope,
  knife,
  candleStick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol,
]
console.log(weapons)

const rooms = [
  'Dinning Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Guest House',
  'Patio',
]
console.log(rooms, suspects, weapons)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}
//console.log(randomSelector)

// *****AN OBJECT THAT KEEPS THE MYSTERY.*****
// ****With a killer, a weapon and a room.****
let mystery = {
  killer: '',
  weapon: '',
  room: '',
}

//***** SHOW ALL INFORMATION ABOUT THE KILLER. ****
// ***** This function will be invoked when you click on the killer card. *****
const pickKiller = () => {
  //****This will randomly select a killer from the suspects. And add that to the mystery object.*****/
  //the mystery object.
  mystery.killer = randomSelector(suspects)

  // ****This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.*****
  const theKiller = document.getElementById('killer')
  const theKillerName = document.getElementById('killerName')
  const theKillerAge = document.getElementById('killerAge')
  const thekillerOccupation = document.getElementById('killerOccupation')
  const theKillerImage = document.getElementById('killerImage')
  const theKillerDescription = document.getElementById('killerDescription')

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + ' ' + mystery.killer.lastName
  theKillerAge.innerHTML = mystery.killer.age
  thekillerOccupation.innerHTML = mystery.killer.occupation
  theKillerImage.src = mystery.killer.image
  theKillerDescription.innerHTML = mystery.killer.description
}

const pickWeapon = () => {
  // ****This will randomly select a weapon from the weapons. And add that to the mystery object****
  mystery.weapon = randomSelector(weapons)

  // ****This will change the background color of the card to the one connected to the chosen weapon and show the name of the weapon.*****
  const theWeapon = document.getElementById('weapon')
  const theWeaponName = document.getElementById('weaponName')
  const theWeaponWeight = document.getElementById('weaponWeight')
  const theWeaponImage = document.getElementById('weaponImage')

  //theWeapon.style.background = mystery.weapon.color  //to change color of the card
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
  theWeaponImage.src = mystery.weapon.image
}

const pickRoom = () => {
  //****This will randomly select a killer from the suspects. And add that to the mystery object.*****/
  mystery.room = randomSelector(rooms)

  // ****This will change the background color of the card to the one connected to the chosen room and show the name of the room.*****
  const theRoom = document.getElementById('room')
  const theRoomName = document.getElementById('roomName')

  //theRoom.style.background = mystery.room.color //to change color of the card
  theRoomName.innerHTML = mystery.room
}

// *****Reveals Mystery, invoked when you click that btn.****
const revealMystery = () => {
  document.getElementById(
    'mystery'
  ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, with a ${mystery.weapon.name}
  in the ${mystery.room}.`
  //console.log(`The murder was committed by ${killer}, in the ${room} with a ${weapon}.`)
}
