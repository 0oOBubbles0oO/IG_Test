var saveGame = JSON.parse(localStorage.getItem("goldMinerSave"))
var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10,
  goldCostGrowth: 1.07,
  goldMultiplier: 1,
  lastTick: Date.now(),
  prestigeGold: 100
}

var numberConverter = {
    short: [
      "",
      "K",
      "M",
      "B",
      "T",
      "Qa",
      "Qi",
      "Sx",
      "Sp",
      "Oc",
      "No",
      "Dc",
      "UDc",
      "DDc",
      "TDc",
      "QaDc",
      "QiDc",
      "SxDc",
      "SpDc",
      "ODc",
      "NDc",
      "Vi",
      "UVi",
      "DVi",
      "TVi",
      "QaVi",
      "QiVi",
      "SxVi",
      "SpVi",
      "OVi",
      "NVi",
      "Tg",
      "UTg",
      "DTg",
      "TTg",
      "QaTg",
      "QiTg",
      "SxTg",
      "SpTg",
      "OTg",
      "NTg",
      "Qd",
      "UQd",
      "DQd",
      "TQd",
      "QaQd",
      "QiQd",
      "SxQd",
      "SpQd",
      "OQd",
      "NQd",
      "Qq",
      "UQq",
      "DQq",
      "TQq",
      "QaQq",
      "QiQq",
      "SxQq",
      "SpQq",
      "OQq",
      "NQq",
      "Sg",
      "USg",
      "DSg",
      "TSg",
      "QaSg",
      "QiSg",
      "SxSg",
      "SpSg",
      "OSg",
      "NSg",
      "St",
      "USt",
      "DSt",
      "TSt",
      "QaSt",
      "QiSt",
      "SxSt",
      "SpSt",
      "OSt",
      "NSt",
      "Og",
      "UOg",
      "DOg",
      "TOg",
      "QaOg",
      "QiOg",
      "SxOg",
      "SpOg",
      "OOg",
      "NOg"
    ],
    full: [
      "",
      " thousand",
      " million",
      " billion",
      " trillion",
      " quadrillion",
      " quintillion",
      " sextillion",
      " septillion",
      " octillion",
      " nonillion",
      " decillion",
      " undecillion",
      " duodecillion",
      " tredecillion",
      " quattuordecillion",
      " quinquadecillion",
      " sedecillion",
      " septendecillion",
      " octodecillion",
      " novendecillion",
      " vigintillion",
      " unvigintillion",
      " duovigintillion",
      " tresvigintillion",
      " quattuorvigintillion",
      " quinquavigintillion",
      " sesvigintillion",
      " septemvigintillion",
      " octovigintillion",
      " novemvigintillion",
      " trigintillion",
      " untrigintillion",
      " duotrigintillion",
      " trestrigintillion",
      " quattuortrigintillion",
      " quinquatrigintillion",
      " sestrigintillion",
      " septentrigintillion",
      " octotrigintillion",
      " noventrigintillion",
      " quadragintillion",
      " unquadragintillion",
      " duoquadragintillion",
      " tresquadragintillion",
      " quattuorquadragintillion",
      " quinquaquadragintillion",
      " sesquadragintillion",
      " septenquadragintillion",
      " octoquadragintillion",
      " novenquadragintillion",
      " quinquagintillion",
      " unquinquagintillion",
      " duoquinquagintillion",
      " tresquinquagintillion",
      " quattuorquinquagintillion",
      " quinquaquinquagintillion",
      " sesquinquagintillion",
      " septenquinquagintillion",
      " octoquinquagintillion",
      " novenquinquagintillion",
      " sexagintillion",
      " unsexagintillion",
      " duosexagintillion",
      " tresexagintillion",
      " quattuorsexagintillion",
      " quinquasexagintillion",
      " sesexagintillion",
      " septensexagintillion",
      " octosexagintillion",
      " novensexagintillion",
      " septuagintillion",
      " unseptuagintillion",
      " duoseptuagintillion",
      " treseptuagintillion",
      " quattuorseptuagintillion",
      " quinquaseptuagintillion",
      " seseptuagintillion",
      " septenseptuagintillion",
      " octoseptuagintillion",
      " novenseptuagintillion",
      " octogintillion",
      " unoctogintillion",
      " duooctogintillion"
    ]
  };
  

if (saveGame !== null) {
  if (typeof saveGame.gold !== "undefined") gameData.gold = saveGame.gold;
  if (typeof saveGame.goldPerClick !== "undefined") gameData.goldPerClick = saveGame.goldPerClick;
  if (typeof saveGame.goldPerClickCost !== "undefined") gameData.goldPerClickCost = saveGame.goldPerClickCost;
  if (typeof saveGame.goldCostGrowth !== "undefined") gameData.goldCostGrowth = saveGame.goldCostGrowth;
  if (typeof saveGame.goldMultiplier !== "undefined") gameData.goldMultiplier = saveGame.goldMultiplier;
  if (typeof saveGame.lastTick !== "undefined") gameData.lastTick = saveGame.lastTick;
  if (typeof saveGame.prestigeGold !== "undefined") gameData.prestigeGold = saveGame.prestigeGold;
}

function tab(tab) {
  // hide all your tabs, then show the one the user selected.
  document.getElementById("mineGoldMenu").style.display = "none"
  document.getElementById("shopMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}

function initialize() {
  tab("mineGoldMenu") // go to a tab for the first time, so not all show
  today = new Date(gameData.lastTick);
  update("saveTime", "Last Save: " + today.toLocaleString())
  update("prestigeStats", "Gold Multiplier: " + format(gameData.goldMultiplier) + ", Prestige Goal: " + format(gameData.prestigeGold))
  update("perClickUpgrade", "Upgrade Pickaxe (Currently Level " + format(gameData.goldPerClick) + ") Cost: " + format(gameData.goldPerClickCost) + " Gold")
  update("goldMined", format(gameData.gold) + " Gold Mined")
}

initialize()

function resetGameAll() {
  gameData.gold = 0
  gameData.goldPerClick = 1
  gameData.goldPerClickCost = 10
  gameData.goldMultiplier = 1
  gameData.prestigeGold = 100
  update("prestigeStats", "Gold Multiplier: " + format(gameData.goldMultiplier) + ", Prestige Goal: " + format(gameData.prestigeGold))
  update("perClickUpgrade", "Upgrade Pickaxe (Currently Level " + format(gameData.goldPerClick) + ") Cost: " + format(gameData.goldPerClickCost) + " Gold")
  update("goldMined", format(gameData.gold) + " Gold Mined")
}

function resetGamePrestige() {
  if (gameData.gold >= gameData.prestigeGold) {
    prestigeFactor = (1 + gameData.gold/gameData.prestigeGold)
    gameData.goldMultiplier *= prestigeFactor
    gameData.gold = 0
    gameData.goldPerClick = gameData.goldMultiplier
    gameData.goldPerClickCost = 10
    gameData.prestigeGold *= prestigeFactor * gameData.goldCostGrowth
    update("prestigeStats", "Gold Multiplier: " + format(gameData.goldMultiplier) + ", Prestige Goal: " + format(gameData.prestigeGold))
    update("perClickUpgrade", "Upgrade Pickaxe (Currently Level " + format(gameData.goldPerClick) + ") Cost: " + format(gameData.goldPerClickCost) + " Gold")
    update("goldMined", format(gameData.gold) + " Gold Mined")
  }
}

function update(id, content) {
  document.getElementById(id).innerHTML = content;
}

function mineGold() {
  gameData.gold += gameData.goldPerClick
  update("goldMined", format(gameData.gold) + " Gold Mined")
}

function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += gameData.goldMultiplier
    gameData.goldPerClickCost *= gameData.goldCostGrowth
    update("goldMined", format(gameData.gold) + " Gold Mined")
    update("perClickUpgrade", "Upgrade Pickaxe (Currently Level " + format(gameData.goldPerClick) + ") Cost: " + format(gameData.goldPerClickCost) + " Gold")
  }
}

function saveGameClick() {
  localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
  timeElapsed = Date.now();
  today = new Date(timeElapsed);
  update("saveTime", "Last Save: " + today.toLocaleString())
}

var mainGameLoop = window.setInterval(function() {
  diff = Date.now() - gameData.lastTick;
  gameData.lastTick = Date.now()
  gameData.gold += gameData.goldPerClick * (diff / 1000)
  update("goldMined", format(gameData.gold) + " Gold Mined")
}, 500)

var saveGameLoop = window.setInterval(function() {
  saveGameClick()
}, 15000)


function abbreviateNumber(number, type = "short"){
  var SI_SYMBOL = numberConverter[type]
  // what tier? (determines SI symbol)
  var tier = Math.log10(Math.abs(number)) / 3 | 0;

  // if zero, we don't need a suffix
  if(number < 0.1 && number > -0.1) return number.toFixed(1);

  // get suffix and determine scale
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
}

function format(number, type = "standard") {
  let exponent = Math.floor(Math.log10(number))
	let mantissa = number / Math.pow(10, exponent)
  exponentLimit = 15
  if (type == "short" || type == "full") return abbreviateNumber(number, type)
  if (type == "standard" && exponent > exponentLimit) return abbreviateNumber(number, "full")
  if (type == "standard" && exponent <= exponentLimit) return abbreviateNumber(number, "short")
	if (exponent < 3) return number.toFixed(1)
	if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
	if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
  if (type == "built-in") return Intl.NumberFormat("en", {notation: "compact", maximumFractionDigits: 1, minimumFractionDigits: 1}).format(number)
}