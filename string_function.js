//substring (起始,結束) 兩個索引之間的字元, 只打一個參數 當作是起始,包含起始,不包含結束
var person = "thomas";
var newperson = person.substring(0, 3); // tho

//slice (起始,結束) 跟substring基本一樣，唯一區別能使用負數
var newperson1 = person.slice(2, 4); //om
var newperson2 = person.slice(-3, -1); //ma

//charAt(索引指標)
person.charAt(3); //m
