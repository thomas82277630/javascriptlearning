var phone = {
  iphone: 13000,
  samsung: 3000,
};

// nullish 性質和 || 一樣，都是先返回true的值， 只是fasly的值只剩(null,undefined) 叫做knowledge value
phone.iphone = 0;
const lg = phone.iphone || 10;
console.log(lg);

const lg1 = phone.iphone ?? 10;
console.log(lg1);

console.log(phone);

