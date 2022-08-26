const numbers = [12, 3, 5, 34, 25, 32, 9, 5, 3, 2];

const fives = numbers.find(five => five % 5 === 0); // (Find প্রথম শর্ত fulfill করবে ) Find এর কাজ হলো প্রথম যেটা দিয়ে বিভাজ্য সেটা দিবে.
console.log(fives);
const products = [
    {id: 1, name: 'laptop',price: 50020},
    {id: 2, name: 'mobile',price: 5050},
    {id: 3, name: 'watch',price: 4000},
    {id: 4, name: 'tablet',price: 500},
    {id: 5, name: 'iphone',price: 550050}
];
const choose = products.find(product => product.price < 5000 ); // (Find প্রথম শর্ত fulfill করবে ) প্রথম যেটা শর্ত দিবে তার সাথে match  করে একটি value দিবে। 
console.log(choose);