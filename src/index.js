console.log(
  "------------------------------------ RESET CONSOLE ------------------------------------"
);

// console.log("●var,let,const");

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を再代入";
// console.log(val1);

// // var val1 = "var変数を再宣言";
// // console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を再代入";
// console.log(val2);

// // let val2 = "let変数を再宣言";
// // console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // val3 = "const変数を再代入";
// // console.log(val3);

// // const val3 = "const変数を再宣言";
// // console.log(val3);

// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// console.log("before: ");
// console.log(val4); //ここ注意！非同期処理が行われている

// val4.name = "jak";
// val4.addres = "Hiroshima";
// console.log("after: ");
// console.log(val4);

// console.log("●テンプレート文字列");

// const name = "jak";
// const age = "28";

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です_flat";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です_template`;
// console.log(message2);

// console.log("●アロー関数");

// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));
// // func1("func1です"); //これはダメ;

// const func2 = (str) => str;
// console.log(func2("func2です"));

// console.log("●分割代入");

// const myProfile = {
//   name1: "jak",
//   age1: 28
// };
// const message3 = `私の名前は${myProfile.name1}です。年齢は${myProfile.age1}です_flat`;
// console.log(message3);

// const { name1, age1 } = myProfile;
// const message4 = `私の名前は${name1}です。年齢は${age1}です_separate`;
// console.log(message4);

// const myProfile2 = ["jak", 29];

// const message5 = `私の名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です_flat`;
// console.log(message5);

// const [name2, age2] = myProfile2;
// const message6 = `私の名前は${name2}です。年齢は${age2}です_flat`;
// console.log(message6);

// console.log("●デフォルト値");

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("jak");
// sayHello();

// console.log("●スプレッド構文");

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // 不具合が起こるパターン
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

// console.log("●map,filter");

// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// nameArr.map((name) => console.log(`${name}です`));
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNumArr1 = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNumArr1);

// console.log("●三項演算子");

// const val10 = 1 > 0 ? "trueです" : "falseです";
// console.log(val10);

// const num = 1300;
// const formatedNum =
//   typeof num === "number" ? num.toLocaleString() : "数字で入力してください";
// console.log(formatedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲です";
// };
// console.log(checkSum(50, 40));

// console.log("●論理演算子の本当の意味");

// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1と2のどちらかがtrue");
// }

// const num4 = 100;
// const fee4 = num4 || "金額未設定です";
// console.log(fee4);
//   →  ||は、左がfalseなら右を返す

// const num5 = 100;
// const fee5 = num5 && 0 && "!!!";
// console.log(fee5);
//   →  &&は、左がtrueなら右を返す