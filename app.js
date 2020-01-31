let store = {
  playerInventory: [],
  playerBank: 0,
  default: 1,
  clickUpgrades: [
    {
      type: "Pick Axe",
      price: 5,
      harvestAmount: 2,
      auto: false
    },
    {
      type: "Mining Laser",
      price: 10,
      harvestAmount: 10,
      auto: false
    },
    {
      type: "Photon Digger",
      price: 100,
      harvestAmount: 50,
      auto: false
    }
  ],
  autoUpgrades: [
    {
      type: "Rover",
      price: 500,
      harvestAmount: 50,
      auto: true
    },
    {
      type: "Cyborg Miner",
      price: 1000,
      harvestAmount: 100,
      auto: true
    },
    {
      type: "Alien Workforce",
      price: 2000,
      harvestAmount: 500
    }
  ]
}

let incrementor = store.playerInventory.filter(i => i.auto == false).map(i => i.harvestAmount).reduce((a, b) => a + b);

let collectAutoUpgrades = store.playerInventory.filter(t => t.auto == true).map(t => t.harvestAmount).reduce((a, b) => a + b)

function autoMine() {
  setInterval(addAutoUpgrade, 3000)
}

function addAutoUpgrade() {
  store.playerBank += collectAutoUpgrades
  drawBank()
}

function mine() {
  store.playerBank += store.default + incrementor
  console.log("incrementor", incrementor);
  console.log("auto upgrades", collectAutoUpgrades);

  console.log("bank", store.playerBank);
  console.log("default", store.default);
  drawBank()
}

function drawBank() {
  document.getElementById("bank").innerText = store.playerBank.toString()
}

function Purchase(item) {
  let choice = store.clickUpgrades.find(i => i.type == item)
  store.playerBank -= choice.price
  store.playerInventory.push(choice)
  console.log("choice from function", choice);
  console.log("player inv", store.playerInventory);
}
