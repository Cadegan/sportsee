class User {
  constructor(firstName, score) {
    // this.infos = infos;
    this.firstName = firstName;
    // this._lastname = lastname;
    // this._age = age;
    this._score = score;
    // this._calorieCount = calorieCount;
    // this._proteinCount = proteinCount;
    // this._carbohydrateCount = carbohydrateCount;
    // this._lipidCount = lipidCount;
  }

  get firstName() {
    return this._firstName;
  }

  //   get lastname() {
  //     return this._lastname;
  //   }

  //   get age() {
  //     return this._age;
  //   }

  get score() {
    return this._score;
  }

  //   get calorieCount() {
  //     return this._calorieCount;
  //   }

  //   get proteinCount() {
  //     return this._proteinCount;
  //   }

  //   get carbohydrateCount() {
  //     return this._carbohydrateCount;
  //   }

  //   get lipidCount() {
  //     return this._lipidCount;
  //   }
}

export default User;
