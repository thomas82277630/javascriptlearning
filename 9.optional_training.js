// if a certain property doesn't exist, undefined will return immediately
var thomas = {
  wahch: "apple",
  trainingdays: {
    monday: 11,
    tuesday: 12,
    wednesday: {
      morning: 8,
      evening: 17,
    },
  },
};
//只有在?前面為true才能讀後面的資料,否則返回return
if (thomas.trainingdays.monday) console.log("goodgood");
console.log(thomas.trainingdays.monday?.cool);
