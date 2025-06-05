// ＊セクション5  基礎編問題＊
// Q1 変数
let nickname = 'ごっしー';
let age = 28;
let text  = '私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。';
console.log(text);   

// Q2 配列
let languages = ['JavaScript','PHP','Ruby', 'Python', 'GO'];
let template = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(template);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age); 


// Q4 配列×オブジェクト

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]); 



// Q5 四則演算

let ageAverage = ( playerList[0].age + playerList[1].age + playerList[2].age) / 3;
console.log(ageAverage); 

// Q6 関数

function sayHello(){
  console.log('Hello');
}
sayHello(); 

let sayWorld = function(){
  console.log('World');
}
sayWorld(); 


// Q7 メソッド
user = {
  birthday: '2000-09-27',
  sayHallo: function() {
    console.log('Hello!');
  }
};
user.sayHallo(); 


// Q8 引数
let calc = {
  function add (x,y){
  console.log(x + y);
};
  function subtract (x,y){
  console.log(x - y);
  };
  function multiply (x,y){
  console.log(x * y);
};
  function divide (x,y){
    console.log(x / y);
};
};

add(2,5)
subtract(20,10)
multiply(7,7)
divide(10,2)


// Q9 返り値
function remainder(x,y){
  let resalt = (x % y);
  return resalt;
}
console.log('5を3で割った余りは' + remainder(5,3) + 'です。');


// Q10 スコープ
// fooが関数として定義されているため、変数xのスコープは{}内となる。
// よって、関数内に存在しないconsole.log(x);は、変数に値を代入しても参照外となる。







// セクション6  応用編問題
// Q1  標準組み込みオブジェクト  0~9のランダムの整数
let random = Math.floor(Math.random()*10);
console.log(random);

// Q2  コールバック関数  3秒後にHello World
setTimeout (function(){
  console.log('Hello World!');
},
3000);



// Q3 if
let num = 2;
if (num > 0){
  console.log('num is greater than 0');
}else if (num < 0){
  console.log('num is less than 0');
}else if (num === 0){
  console.log('num is 0');
}


// Q4 for 
let numbers = [];

for (let i = 0; i < 100; i++){
  numbers.push(i)
}
console.log(numbers);


// Q5 for if   
let mixed = [4, '2', 5, '8','9', 0, 1];


for (let i = 0; i < mixed.length; i++){
  console.log(mixed[i]);

  
if (mixed[i] % 2 == 0)
  if(typeof mixed[i] === 'number'){
  console.log('even');
}else {
  console.log('not number'); 
}


if (mixed[i] % 2 == 1)
   if(typeof mixed[i] === 'number'){
  console.log('odd');
}else {
  console.log('not number'); 
}
  }
 




