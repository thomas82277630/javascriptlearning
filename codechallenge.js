const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmud",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const player1 = game.players[0];
const player2 = game.players[1];
const [gk, ...fieldplayers] = ["Lewandowski", ...player1];
console.log(gk, fieldplayers);
const allplayers = [...player1, ...player2];
console.log(allplayers);
const playersfinal = [...player1, "Thiago", "Coutinho", "Perisic"];
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

function printGoals(...numbers) {
  console.log(number);
  console.log(`${number.length} goals were scroed`);
}
team1 < team2 && console.log("team 1 is more likely to win");
