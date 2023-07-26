// spread,because ...is on the left side of =
const arr = [1, 2, 3, ...[4, 5]];
// Rest,because ... is on the right side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

var name1 = ["thomas", "gerge", "mix", "aray"];
var name2 = ["amei", "alan", "acool", "abo"];
var [thomas, amei, ...othername] = [...name1, ...name2];
console.log(thomas, amei, othername);
// 物件使用rest operator
const animals = {
  fly: { wings: "bird", nowings: "penguin" },
  run: { legs: 2, legs: 4 },
  swim: { river: "crocodile", ocean: "shark" },
};
const { swim, ...onlyflyandrun } = animals;
console.log(swim, onlyflyandrun);
// rest operator 當作  function參數, restaruments
function x(...number) {
  var sum = 0;
  
  for (i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log(sum);
}
x(6, 4, 7, 8, 2, 5, 3, 6);

function order(mainfood, secondaryfood, ...otherfood) {
  console.log(mainfood);
  console.log(secondaryfood);
  console.log(otherfood);
}
order("你媽", "你弟", "俺趴囝仔", "德雷幹娘");
