// 解構物件裡的元素
var family = {
  brother: "thomas",
  sister: "amandine",
  youngBrother: "toby",
  other: ["kathy", "lin", "bebe"],
  classmate: {
    gigi: {
      firstkid: "aho",
      secondkid: "lanpa",
    },
    qaa: "carlos",
    qbb: "lonly",
  },
  familylist: function ({ brother, sister, youngBrother, index }) {
    console.log(
      `懶覺${brother}帶著懶覺${sister}還有懶覺${youngBrother}去找${this.other[index]}`
    );
  },
};
const { brother, sister, youngBrother } = family;
console.log(brother, sister, youngBrother);
// 解構物件裡的元素並賦予新變數名稱
const {
  brother: youngboy,
  sister: younggirl,
  youngBrother: littlebaby,
} = family;
console.log(youngboy, younggirl, littlebaby);
const { other: otherFamily } = family;
console.log(otherFamily);
// 解構並給予預設值
const { other: othermember = [], mom = [] } = family;
console.log(othermember);
// 解構物件並將其value賦予到已存在的變數
let a = 100;
let b = 199;
const obj = { a: 23, b: 33, c: 44 };
({ a, b } = obj);
console.log(a, b);
// 巢狀物件解構
const {
  classmate: {
    gigi: { firstkid, secondkid },
  },
} = family;
console.log([firstkid, secondkid]);
family.familylist({
  brother: "thomas",
  sister: "amandine",
  youngBrother: "toby",
  index: 2,
});
