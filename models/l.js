class Lion {
  constructor(name, weight, gender, food, dangerous = true, king = true) {
    this.name = name;
    this.weight = weight;
    this.gender = gender;
    this.food = food;
    this.dangerous = dangerous;
    this.king = king;
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

  kingOfJungle() {
      console.log(`${this.name} ${this.king ? 'is ' : 'is not '}the King of the Jungle`);
  }
}
export default Lion;