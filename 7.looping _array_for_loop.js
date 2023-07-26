const food = ["ham", "bacon", "coke", "sausage", "sandwich"];
for (const item of food.entries()) console.log(item);
for (const item of food.entries()) console.log(`${item[0] + 1}:${item[1]}`);
for (const [i, el] of food.entries()) console.log(`${i + 1}:${el}`);
