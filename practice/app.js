// ウィンドウ表示(画面上部に小ウィンドウ)
// alert('Hello World!');

// デベロッパーツールのコンソールタブに表示される(ctl+shift+i)
// console.log('Hello World!');




〇変数について
textという名前の変数に文字列を代入→console.logで変数の内容を出力している
変数の中身は変更可能だが、再定義はできない
＊let 変数名 = 値;

let text = 'JavaScriptの練習';
console.log(text);

変数の再代入
text = 'JavaScriptをマスターした';
console.log(text);

＊const constant = 'これは定数です';
constant = '定数は再代入できません'; //エラー


〇データがたについて
＊文字列型 
必ず''または""で囲む 

let single = '文字型列です';
console.log(single);

＊文字列の連結
let name = 'ジョニー';
let greet = '私は' + name + '!';
console.log(greet); //私はジョニー!

＊テンプレートリテラル
テンプレートリテラルを使用する場合はバッククォート(`)で囲む
// 変数を埋め込む場合は${}を使用   ${変数名}

let template = 'テンプレートリテラル';
let templateText = `これは${template}です
${template}は改行もできます`;
console.log(templateText);
//これはテンプレートリテラルです

＊数値型
let num = 10;
oconsole.log(num); //10

クウォート''で囲んでしまうと文字列になってしまうので注意
→文字列同士の足し算などは文字列の連結になってしまうので注意
let numTen = 10;
let strTen = '10';
oconsole.log(numTEn + strTen); //1010

let minus =  -10;
let decimal = 1.1;
console.log(minus, decimal); //-10

＊数値型でできる操作
let num1 = 25;
let num2 = 2;
console.log(num1 + num2); //27
console.log(num1 - num2); //23
console.log(num1 * num2); //50
console.log(num1 / num2); //12.5

let number = 5;
number = number + 3;
console.log(number); //8
number += 3; //+=は足し算のショートカット 省略記法
number -= 3; //-=は引き算のショートカット 省略記法
number *= 3; //*=は掛け算のショートカット 省略記法
number /= 3; // /=は割り算のショートカット 省略記法

インクリメント,,デクリメント
let increment = 1;
increment++;                  変数の値を1増やす
console.log(increment); //2  
increment--;                  変数の値を1減らす
console.log(increment); //1  

余剰  //割り算の余りを求める
let bigNum = 25;
let smallNum = 2;
console.log(bigNum % smallNum); //1

蓄積乗
let bigNum = 25;
let smallNum = 2;
console.log(bigNum ** smallNum) //625  25の2乗


〇配列型
配列を定義するときは[]で囲む
let names = ['john', 'bob', 'michael','emma'];
console.log(names);

個別の値の取得方法
配列の変数[配列の順番(indexという)]

let names = ['john', 'bob', 'michael','emma'];
console.log(names[0]); //john
console.log(names[1]); //bob
console.log(names[2]); //michael
console.log(names[3]); //emma
console.log(names[4]); //undefined    未定義

定義することもできる
let emptyNames = [];
emptyNames[0] = 'john';
emptyNames[1] = 'bob';
emptyNames[2] = 'michael';
emptyNames[3] = 'emma';
console.log(emptyNames, emptyNames.length); //4
//配列の長さを取得する


〇オブジェクト型  key+value(プロパティという)
//オブジェクトを定義するときは{}で囲む

let John = {
    name: 'john',
    age: 26,
    bloodtype: A,
    favorite: 'card',
};
この中で血液型を取得したい場合↑
console.log(John.bloodtype); //A

空のオブジェクトを変数に代入した後キーに値を入れることもできる
let Andy = {};

Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';


配列の中にオブジェクトを入れることもできます。
(その逆でオブジェクトの中に配列を入れることもできます)
let vehicles = [
  { name: 'car', color: 'red', speed: 'normal' },
  { name: 'train', color: 'green', speed: 'fast' },
  { name: 'airplane', color: 'grey', speed: 'faster' },
];