class Alligator {
constructor(name, weight, gender, food, dangerous = false) {
    this.name = name;
    this.weight = weight;
    this.gender = gender;
    this.food = food;
    this.dangerous = dangerous;
}
  eat() {
    console.log(`${this.name} loves to eat ${this.food}.`);
  }

  dangerous() {
     console.log(`${this.name} ${dangerous ? 'will kill you!' : 'is a nice animal!'}`);
  }
}

export default Alligator;
