class Animal {
  //Abstration starts here...
  speak(a) {
    console.log(a);
  }

  move(a) {
    console.log(`i am ${a}`);
  }

  grow() {
    console.log("I am growing");
  }
  excrete() {
    console.log("I am excreting");
  }
  reproduce() {
    console.log("I am reproducing");
  }
  eat() {
    console.log("I am eating");
  }
}

// Inheritances here
class Anthropoda extends Animal {}

class Fish extends Animal {}

class Amphibia extends Animal {}

class Reptiles extends Animal {}

class AVES extends Animal {}

class Mammals extends Animal {
  //Encapsulation here!!!
  #mate() {
    console.log("i am mating");
  }
  reproduce() {
    this.#mate();
  }
}

// Anthropoda movement
const anthropoda = new Anthropoda();
anthropoda.move("flying");

// Fish Movement
const fish = new Fish();
fish.move("swimming");

// Amphibia Movement
const amphibia = new Amphibia();
amphibia.move("walking");

// Reptiles movement
const reptiles = new Reptiles();
reptiles.move("crawling");

// Aves movement
const aves = new AVES();
aves.move("flying");

// Mammals Movement
const mammals = new Mammals();
mammals.move("moving");
mammals.reproduce();

// polymorphism here!
const cat = new Mammals();
cat.speak("meow");
const dog = new Mammals();
dog.speak("bark bark bark barkkkkkk");
