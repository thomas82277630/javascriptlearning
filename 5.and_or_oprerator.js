// use any data type, return any data type, short circuiting
// always falsy value(false, 0 , -0 , 0n , emtpy string('' , "" ,``) ,null , undefined , NaN)
//小迴圈會先返回truthy的值,如果沒有truthy的值就會返回最後的值
console.log(3 || "jonas");
console.log("" || "jonas");
console.log(true || 0);
console.log(undefine || null);

var phone = {
  iphone: 13,
  samsaug: 14,
  opal: 15,
};
const phone1 = phone.meimei ? phone.meimei : 10;
console.log(phone1);

//&& 先返回falsy值
//  pratical example
const trainstation = {
  cooltrain: function train(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
  },
};
trainstation.cooltrain &&
  trainstation.cooltrain("南港", "板橋", "台北", "萬華", "西門");
