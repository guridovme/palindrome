let day = 3;
let month = 12;
let year = 2023;
const totalLength = 2;

function dayCheck(day,totalLength) {
  return String(day).padStart(totalLength, '0');
}
function monthCheck(month,totalLength) {
  return String(month).padStart(totalLength, '0');
}
 
console.log(`${dayCheck(day,totalLength)}/${monthCheck(month,totalLength)}/${year}`);
