// es6加強了物件{}的寫法
// 可以直接將其他物件以原變數名稱寫進物件
var phone = {
  iphone: 13,
  samsung: 14,
  lg: 15,
};
var family = {
  brother: "thomas",
  sister: "cooc",
  mother: "diao",
  phone,
  order() {
    console.log(this.brother);
  },
};
//物件裡的method不用再寫function
family.order();
//變數用中括號也可以直接運算

var plan = {
  [`day_${1 + 1}`]: "吃大便當",
};
console.log(plan);
