let valueRub = 100;
let currency ='AED';
let convertResult = 0;

function convertRub(valueRub, currency, convertResult) {
    
  switch (currency) {
    case 'USD':
    return convertResult = valueRub / 90;    
    break;
    
    case 'EUR':
    return convertResult = valueRub / 100;
    break;
      
    case 'KZT':
    return convertResult = valueRub * 4.9;
    break;
    
    case 'AED':
    return convertResult = valueRub / 25;
    break; 
      
    default:
    return ( "Введите число в рублях и валюту для перевода: USD, EUR, KZT, AED" );
    }
  

}
console.log(convertRub(valueRub, currency, convertResult));


