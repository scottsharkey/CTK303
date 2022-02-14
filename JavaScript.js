var regionArray = [
  "In the Woods",
  "In the Desert",
  "In the Hills",
  "In the Mountains",
  "In the Swamps",
  "In the Plains",
  "On the Coast",
  "In the Cave"
];

var threatArray = [
  "there is a Dragon.",
  "there is a monsterous tribe.",
  "there is a Giant tribe.",
  "there is an enemy stronghold.",
  "there is a monster.",
  "there are undead."
];

var rewardArray = [
  "Deal with it and you shall be paid in gold.",
  "Deal with it and a keep will be yours to do with as you will.",
  "Deal with it and a tower will be yours to do with as you will.",
  "Deal with it and a temple will be yours to do with as you will.",
  "Deal with it and an establisment will be yours to do with as you will.",
  "Deal with it and a magic item will be yours to do with as you will.",
  "Deal with it and a potion will be yours to do with as you will.",
  "Deal with it and a spell scroll will be yours to do with as you will.",
  "Deal with it and nobile titles will be granted to you and your comrades."
];


var randomItem1 = regionArray[Math.floor(Math.random()*regionArray.length)];
var randomItem2 = threatArray[Math.floor(Math.random()*threatArray.length)];
var randomItem3 = rewardArray[Math.floor(Math.random()*rewardArray.length)];

var num = document.getElementById("mybutton1").innerHTML;
