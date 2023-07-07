function createPerson(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

let people1 = new createPerson("Ivan", "Doe", 25);
let people2 = new createPerson("John", "Doe", 19);
let people3 = new createPerson("qwer", "Doe", 20);

const peoples = [people1, people2,people3];


const findOldest = peoples.sort( (a,b) => b.age - a.age ).filter(el => el.age === peoples[0].age);
console.log(findOldest);
