class Dolphin {
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

  isDangerous() {
    console.log(
      `${this.name} is ${
        this.dangerous
          ? "a dangerous animal and will kill you."
          : "a sweetheart."
      }`
    );
  }
}

export default Dolphin; 