// 將陣列放進另一個陣列並拆開
const arr = [1, 2, 3];
const newarr = [4, 5, 6, ...arr];
console.log(newarr);
// 陣列拆成個別value
console.log(...newarr);
// spread operator和destructuring 很像，但是他會將陣列裡的value全數拆開，
// 並且不會放到變數中

// copy array
const badarray = [...newarr];
//merge array
const goodarray = ["thomas", "cool"];
const mergearray = [...newarr, ...goodarray];
console.log(mergearray);
//iterables:arrays,string,maps,sets,not object
//開來之後是個別數值，只能放在新陣列或是當作function的argument用
// strings also can use spread opearator
const star = "okaybalaboom";
const letters = [...star];
console.log(letters);
// fuction裡的參數用spread operation拆開的數值
function sportsOrder(a, b, c) {
  console.log(
    `the sports I love the most is ${a}, second one is ${b},last one is${c}`
  );
}
const sports = [
  prompt("sport you like the best?"),
  prompt("sport you like the second?"),
  prompt("sport you like the third?"),
];
sportsOrder(...sports);
