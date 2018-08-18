let fullPrice = Number(prompt('Please enter price', '888888888'));
let discount = Number(prompt('Please enter discount', '88'));
let result = '';

if (isNaN(fullPrice) || isNaN(discount) ||
    fullPrice < 0 || discount < 0 || discount > 100) {
    result = 'Invalid data';
} else {
let priceWithDiscount = fullPrice * (100 - discount) / 100; 
let savedMoney = fullPrice - priceWithDiscount; 
   result = 'Price without discount: ' + Math.round(fullPrice * 100) / 100 + '\n' +
        'Discount: ' + Math.round(discount * 100) / 100 + '%' + '\n' +
        'Price with discount: ' + Math.round(priceWithDiscount * 100) / 100 + '\n' +
        'Saved: ' + Math.round(savedMoney * 100) / 100;
} 

console.log(result);
