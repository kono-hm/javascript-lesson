IF文 条件分岐を行いたいとき
if (条件式) {}
// 条件式がtrueのときに実行される処理
else if (条件式) {}       ← 条件の追加ができる

真偽値型
真偽値、、、true false まとめて真偽値という

let value1 = true;
let value2 = false;


〇ifと真偽値を組み合わせる

if (false) {
  console.log('trueです!');
}
console.log('処理が終わりました');
// falseなので、ifの中は実行されない

〇比較演算子を使う
let tall = 185;
if (tall >= 180) {
  console.log('高身長です');
}


// 比較演算子	意味
// ===	     厳密に等しい  (型まで一致している必要が有る)
// ==	     等しい
// !==	     厳密に等しくない
// !=	     等しくない
// >	      より大きい
// >=	     以上
// <	      未満
// <=	    以下


let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');


〇複雑な条件分岐

let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄信号です。注意しましょう');
}


if文の条件は上から順にチェックされていく。
// 条件がtrueのものが見つかったら、以降の条件はチェックされない
// 例）
let myAge = 60;
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
}


すべての条件式がfalseだった場合
// elseを使うことで、すべての条件式がfalseだった場合の処理を記述できる
// 例）
let myAge = 12;
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}



〇論理演算子を使う
// 論理演算子は、条件式を組み合わせるために使う　　かつやまたは

＊または  ||
let loto = 8;
if (loto === 7 || lot0 === 8) {
  console.log('当たり');
} else {
  console.log('はずれ');
}

let numVal = 8;
let strVal = 'text'

console.log(numVal === 8 || strVal === 'text');

＊かつ  &&
let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '不在') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('全員揃っていないので出発できません。');
}



〇三項演算子
lett errMsg = '';
if (errMsg === ''){
  console.log('エラーメッセージはありません');
} else {
  console.log('エラーメッセージはあります');
}

// 上記のif文を三項演算子を使って書き換える
errMsg === '' ? console.log('エラーメッセージはありません') : console.log('エラーメッセージはあります');


let number = 1;
 let text = number % 2 === 0 ? '偶数' : '奇数';
console.log(text); // 奇数


〇真値と偽値(Truthy and Falsy)
// JavaScriptでは、if文の条件式に使える値は、
// 真偽値だけではなく、真値と偽値も使える
// 真値、、、trueと同じように扱われる値
// 偽値、、、falseと同じように扱われる値
Falsyな値
false
undefind
null
0
''（空文字）




〇for文について
// for文は、繰り返し処理を行うための文法
// for文の基本形
for (初期値; 繰り返しの条件式; 処理の後にされる式) {
  // ここに繰り返す処理を書きます。
}

for (let i = 0; i < 10; i++){
        1        2       3
  console.log(i + '回目のコンソール');
      4
}
// 1.初期値
// 2.繰り返しの条件式
// 3.処理の後にされる式
// 4.繰り返す処理

《図中①》初期値として、変数i に0が代入されます。
《図中②》条件式がチェックされます
2の条件式が、trueだった場合、《図中④》繰り返し処理が実行されます。falseだった場合、繰り返し処理は終了します。
《図中③》後処理が実行されます。今回はiの値に1を足しています。
以降、②の条件式がfalseになるまで、②→④→③の順番で処理が繰り返されます。


let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < number.length; i++) {
  sum += number[i];
}

console.log(sum);  // 55
変数iの値は0から始まって、順番に1ずつ加算されています。

そのため、
1周目：sum = sum + numbers[0];  // sum = 0 + 1
2周目：sum = sum + numbers[1];  // sum = 1 + 2
3周目：sum = sum + numbers[2];  // sum = 3 + 3
︙
9周目：sum = sum + numbers[8];  // sum = 36 + 9
10周目：sum = sum + numbers[9]; // sum = 45 + 10

という順に繰り返し計算され、最終的にコンソールには「55」が表示されます。