const name = 'john';
const surname = 'doe'; 
const age = 18;

function createPerson(name, surname, age){
  
  return {
    name: name,
    surname: surname,
    age: age
  };
}
                       
console.log(createPerson(name, surname, age));
