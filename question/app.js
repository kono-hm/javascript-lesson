// ＊練習問題＊
// Q1 変数
let nickname = 'ごっしー';
let age = 28;
let text  = '私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。';
console.log(text); //私のニックネームはごっしーです。年齢は28歳です。  

// Q2 配列
let languages = ['JavaScript','PHP','Ruby', 'Python', 'GO'];
let text2 = `私の好きな言語は${JavaScript}です。次は${Python}を勉強してみたいです。`;
console.log(text2);//私の好きな言語はJavaScriptです。次はPythonを勉強してみたいです。

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
}
console.log(user.age); //26


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
console.log(playerList.Bob.favorites[1]); //The Legend of Zelda
//Bobの好きなゲームはThe Legend of Zelda


// Q5 四則演算
let JohnAge = 26;
let BobAge = 33;
let MichaelAge = 22;
let ageAverage = (JohnAge + BobAge + MichaelAge) / 3;
console.log(ageAverage); //27

// Q6 関数

function sayHello(){
  console.log('Hello');
}
sayHello(); //Hello

let sayWorld = function(){
  console.log('World');
}
sayWorld(); //World


// Q7 メソッド
let user = {
  birthday: '2000-09-27',
  sayHallo: function() {
    console.log('Hello!');
  }
};
user.sayHallo(); //Hello!

// Q8 引数
let calc = {};
function add(x,y){
  console.log(x + y);
}
add()

let calc = {};
function subtract(x,y){
  console.log(x - y);
}
subtract(20,10)

let calc = {};
function multiply(x,y){
    console.log(x * y);
}
multiply(7,7)


let calc = {};
function divide(x,y){
    console.log(x / y);
}
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




// ＊応用編問題＊
// Q1  標準組み込みオブジェクト  0~9のランダムの整数
var random = Math.floor(Math.random()*11);
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
}
else if (num < 0){
  console.log('num is less than 0');
}
else if (num == 0){
  console.log('num is 0');
}


// Q4 for  ?????
let numbers = [];

for (let i = 0, i < 100, i++){
console.log();
}

console.log(numbers);


// Q5 for if    ????
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i =0; 0 < 10; i++){
if (mixed = 0 || 4 ){
  console.log('even');
}
else if (mixed = 1 || 5){
  console.log('odd');
}
else if (mixed = '2' || '8' || '9'){
  console.log('not number');
}
}


