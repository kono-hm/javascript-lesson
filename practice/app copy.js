〇関数の定義
function 関数名() {
  処理の内容
}

この場合も関数の定義ができる
// const define2 = function() { // 名前のない関数（無名関数）を変数define2に代入
//   return 'This is console in showConsole function!';
// }


１．半径が2の円の面積を求める関数を定義
function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}
２．関数の呼び出しを行う
getArea();


＊引数を使用し様々な値の計算ができる
// 定義
function 関数名(引数) {
  処理の内容
}
// 呼び出し
関数名(引数)


function getArea(radius) {
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}
getArea(2); //円の面積は12.56です
getArea(3); //円の面積は28.26です
↑呼び出すときにどの値を渡すかによって引数の内容が変わってくるので
　別の値を渡すと別の結果になります。


＊返り値
function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;
}

console.log('円の面積は' + getArea(5) + 'です');
console.log('この円の面積はなんと' + getArea(10) + 'でござんす');
関数の呼び出し箇所circleに返すことができ、この返された値を返り値と呼びます

＊コールバック関数   ????
実際引数には、数値や文字列以外にも関数を渡すことができるのが、
この引数に渡す関数のことをコールバック関数という
例１
function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}
// doFuncの引数にコールバック関数を渡す
// doFuncの中でcallback()を実行することで、コールバック関数が呼び出される
doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});　　　　無名関数

例２
function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}
function output() {
  console.log('コールバック関数が呼び出されました');
}
doFunc(output)


＊オブジェクトに関数を持たせる   ????
let John = {
  name: 'John',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};
John.sing(); //LA~LA~LA~~~♪
//オブジェクトの中に関数を持たせることができる




〇標準組み込みオブジェクト
let round = Math.round(2.86); // 四捨五入
console.log('round => ', round);

let ceil = Math.ceil(4.05);   // 切り上げ
console.log('ceil => ', ceil);

let floor = Math.floor(4.98); // 切り下げ
console.log('floor => ', floor);

let random = Math.random(); // 0~1までの乱数の生成
console.log('random => ', random);


〇スコープ  ????
myFunc()
// スコープとは変数の有効範囲のこと
// スコープにはグローバルスコープとローカルスコープがある
// グローバルスコープは、どこからでもアクセスできる
// ローカルスコープは、関数の中で定義された変数のこと
// ローカルスコープは、関数の外からはアクセスできない
// 変数のスコープは、{}で囲まれた範囲



function myFunc() {
  let userAge = 27;
  console.log(userAge); // => 27
}
console.log(userAge); // => ReferenceError: userAge is not defined
// 変数のスコープは、{}で囲まれた範囲  ｍｙFunkが定義されているため

関数の外で値を参照したい場合↓    
 変数の定義を先に関数の外で行う

let userAge = 0;
function myFunc() {
  userAge = 27;         ←ここで再代入する形となる
  console.log(userAge); // => 27
}

console.log(userAge); // => 27

関数の内部で定義した変数はその関数内でしか使えませんが、
関数の外部で定義した変数は関数の中からでも参照することができます。
この関数の外部で定義した変数こそが、先程紹介したグローバル変数になります。