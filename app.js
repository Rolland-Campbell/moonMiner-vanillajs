let store = {
  playerBank: 0,
  upgrades: {
    pickAxe: {
      price: 5,
      harvestAmount: 2,
      quantity: 0,
      multiplier: 2
    },
    miningLaser: {
      price: 50,
      harvestAmount: 5,
      quantity: 0,
      multiplier: 2
    },
    photonDigger: {
      price: 100,
      harvestAmount: 10,
      quantity: 0,
      multiplier: 2
    },
    rover: {
      price: 500,
      harvestAmount: 10,
      quantity: 0,
      multiplier: 2
    },
    cyborgMiner: {
      price: 1000,
      harvestAmount: 30,
      quantity: 0,
      multiplier: 2
    },
    alienWorkforce: {
      price: 2000,
      harvestAmount: 50,
      quantity: 0,
      multiplier: 2
    }
  }
}

function autoMine() {
  setInterval(addAutoUpgrade, 3000)
}

function addAutoUpgrade() {
  let rover = store.upgrades.rover.quantity * store.upgrades.rover.harvestAmount
  let cyborg = store.upgrades.cyborgMiner.quantity * store.upgrades.cyborgMiner.harvestAmount
  let alien = store.upgrades.alienWorkforce.quantity * store.upgrades.alienWorkforce.harvestAmount
  store.playerBank += rover + cyborg + alien
  Update()
}

function mine() {
  let hand = 1
  let axe = store.upgrades.pickAxe.quantity * store.upgrades.pickAxe.harvestAmount
  let laser = store.upgrades.miningLaser.quantity * store.upgrades.pickAxe.harvestAmount
  let digger = store.upgrades.photonDigger.quantity * store.upgrades.photonDigger.harvestAmount
  store.playerBank += hand + axe + laser + digger
  Update()
}

function Purchase(item) {
  if (store.playerBank >= store.upgrades[item].price) {
    store.upgrades[item].quantity++
    store.playerBank -= store.upgrades[item].price
    store.upgrades[item].price *= store.upgrades[item].multiplier
    console.log("quantity", store.upgrades);
    Update()
  } else alert("You need more cheese!!")
}

function Update() {
  document.getElementById('bank').innerText = store.playerBank.toString()
  document.getElementById('axeInv').innerText = store.upgrades.pickAxe.quantity.toString()
  document.getElementById('laserInv').innerText = store.upgrades.miningLaser.quantity.toString()
  document.getElementById('diggerInv').innerText = store.upgrades.photonDigger.quantity.toString()
  document.getElementById('roverInv').innerText = store.upgrades.rover.quantity.toString()
  document.getElementById('cyborgInv').innerText = store.upgrades.cyborgMiner.quantity.toString()
  document.getElementById('alienInv').innerText = store.upgrades.alienWorkforce.quantity.toString()
  document.getElementById('pickAxe').innerText = store.upgrades.pickAxe.price.toString()
  document.getElementById('miningLaser').innerText = store.upgrades.miningLaser.price.toString()
  document.getElementById('photonDigger').innerText = store.upgrades.photonDigger.price.toString()
  document.getElementById('rover').innerText = store.upgrades.rover.price.toString()
  document.getElementById('cyborgMiner').innerText = store.upgrades.cyborgMiner.price.toString()
  document.getElementById('alienWorkforce').innerText = store.upgrades.alienWorkforce.price.toString()
}