// 拆解陣列裡的value
var arr = [1, 2, 3, 4, 5, 6, 7];
let [a, b, c, d, e, f, g] = arr;
console.log(a);
// 陣列裡的變數變更value
[a, b, c] = [c, b, a];
console.log(a, b, c);
// 拆解陣列裡的陣列(拆解nested)
var arr1 = [1, 2, 3, 4, [5, 6]];
[a, b, c, d, [e, f]] = arr1;
console.log(e, f);
// 預設值
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
