// proerty name
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
const trainingdays = Object.keys(thomas.trainingdays);
var sign = `thomas training ${trainingdays} days a week, on:`;
for (const day of trainingdays) {
  sign += `${day},`;
}
var newsign = sign.substring(0, sign.length - 1) + ".";
// proerty value
//Object.entries(裏頭放物件=[[key,value]])
const trainingtime = Object.values(thomas.trainingdays);
console.log(Object.entries(thomas.trainingdays));
