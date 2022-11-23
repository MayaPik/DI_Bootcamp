class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸"); //first will console this log
    super(); // this calls the Bird behavior- so it will console the bird log
  }
}

const pet = new Flamingo();
//"I'm pink. 🌸"
//"I'm a bird. 🦢"