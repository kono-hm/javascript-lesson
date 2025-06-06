
// 変数
let text = 'javascriptの練習';
console.log(text);
// 再代入可能　　再定義は不可能
text = 'javascriptをマスターした';
console.log(text);

// 定数
const



// データ型
// 文字列型
let name = 'ジョニー'
let greet = '私は' + name + '!';
console.log(greet);

let template = 'テンプレートリテラル';
let templateText = `これが${template}です。
改行もできます`;
console.log(templateText);




// 数値型
let num = 10;
let numTen = '10';
console.log(num,numTen);

let minus = -10;
let decimal = 1.1;
console.log(minus,decimal);

let num1 = 25;
let num2 = 2;
console.log(num1 + num2);

let number = 5;
number = number + 3;
console.log(number);
// 省略記法
let number1 = 5;
number1 += 3;
console.log(number1);

// １を足す
let increment = 0;
increment++;
console.log(increment);
// １を引く
let decrement = 10;
decrement--; 
console.log(decrement);

// 剰余（余りを算出）
let bigNum = 25;
let smallNum = 2;

console.log(bigNum % smallNum);

// 累乗
let bigNum1= 25;
let smallNum1= 2;
console.log(bigNum1 ** smallNum1); 


// 配列型
let names1 = ['John', 'Bob', 'Michael', 'Emma'];
console.log(names1);


let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

let emptyNames = [];
emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length); 
// ['John', 'Bob', 'Michael', 'Emma'] 4 が取得できる



// オブジェクト型
// let John = {
//   name: 'John', // key（キー）: value（バリュー）がセット
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
// };
// console.log(John.bloodType);

// 空のオブジェクトに値を指定することが可能
let Andy = {};
Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';
console.log(Andy.bloodType);

// 配列の中にオブジェクトを入れる
let vehicles = [
  { name: 'car', color: 'red', speed: 'normal' },
  { name: 'train', color: 'green', speed: 'fast' },
  { name: 'airplane', color: 'grey', speed: 'faster' },
];
console.log(vehicles[0]);




// 扱っている変数のデータ型、値の内容を知る方法
let one = '1';
let two = 2;

console.log('one →', typeof one, one); 
console.log('two →', typeof two, two);



// 関数
function 関数名() {
  処理の内容
}

function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}
getArea();

// 引数
function 関数名(引数) {
  処理の内容
}

function getArea(radius) {
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea(5);


// 返り値
function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;
}

console.log('円の面積は' + getArea(5) + 'です');
console.log('この円の面積はなんと' + getArea(10) + 'でござんす');


// コールバック関数　？？？？




// ＊オブジェクトに関数を持たせる
let John = {
  name: 'John', 
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function(){
    console.log('LA~LA~LA~~~');
  }
};
John.sing();

// ＊標準組み込みオブジェクト
// 四捨五入
let round = Math.round(2.86)
console.log('round =>',round);
// 切り上げ
let ceil = Math.ceil(4.05);
console.log('ceil =>',ceil);
// 切り下げ
let floor = Math.floor(4.98);
console.log('floor =>',floor);
// 0~1までの乱数生成
let random = Math.random();
console.log('random =>',random);



// if文
// if (条件式) {
//   // 条件式がtrue（真）のときの処理
// }


if (true){
  console.log('trueです');
}
console.log('処理が終わりました');

// ＊比較演算子
let tall = 185;
if (tall >=180){
  console.log('高身長です');
}


let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');

// ＊複雑な条件分岐
// if文は、else ifを使うことで条件を追加することができます。


let myAge = 12;
if (myAge >= 35){
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20){
  console.log('お酒が飲めます');
} else if (myAge >= 18){
  console.log('選挙権があります');
} else{
  console.log('子供です');
}


// ＊理論演算子
let loto = 8;

if (loto === 7 || loto === 8) {
  console.log('当たり');
} else {
  console.log('ハズレ');
}

// || または
let numVal = 8;
let strVal = 'tex'

console.log(numVal === 7 || strVal === 'text');

// && かつ
let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}


// ＊三項演算子
let errMsg = '';

// if 文を使った書き方
if (errMsg === '') {
    console.log('ない！');
} else {
    console.log('ある！');
}

// 三項演算子を使った書き方
errMsg === '' ? console.log('ない！') : console.log('ある！');


// 例
let numb = 1;

// numberを2で割った時
// 割り切れたら「偶数です」、割り切れなかったら「奇数です」
// という文字列をtextに代入する
let text2 = numb % 2 === 0 ? '偶数です' : '奇数です';
console.log(text2); // 奇数です



// ＊真値 Truthy  と  偽値 Falsy
if (1) {
    console.log('hoge');
}

if (0) {
    console.log('piyo');
}
// number型である1をboolean型にキャストするとtrueになり、number型である0をboolean型にキャストするとfalseになります。
// つまりnumber型の1はTruthyと言えますし、number型の0はFalsyと言えます。



// ＊for文
// for (初期値; 繰り返しの条件式; 処理の後にされる式) {
//   // ここに繰り返す処理を書きます。
// }
for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);