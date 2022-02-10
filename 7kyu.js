/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/

/*function getCount(str) {
  var vowelsCount = 0;
 return str.split("").filter(item => (item == 'a' || item ==  'e' || item ==  'i' || item ==  'o' || item ==  'u' )).length 
}

console.log(getCount("hgreaegj gyityf hbuyit"))*/



/*Добро пожаловать. В этой ката вас просят возвести в квадрат каждую цифру числа и соединить их.
Например, если мы пропустим через функцию 9119, получится 811181, потому что 9 2 равно 81, а 1 2 равно 1.
Примечание . Функция принимает целое число и возвращает целое число.*/

/*function squareDigits(num){
 return Number(String(num).split("").map(i => (i*i)).join(""));

}

console.log(squareDigits(2456))*/



/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return
 the middle character. If the word's length is even, return the middle 2 characters.*/

/* function getMiddle(s)
{
  let num = s.split("");
  return (num.length % 2 != 0) ? num[Math.floor(num.length/2)] : 
  num[num.length/2 -1] + num[num.length/2]    
}
console.log(getMiddle("fg"))*/




 /*У Джона есть список первых nпожертвований: [14, 30, 5, 7, 9, 11, 15] он хочет знать, сколько следующий благотворитель должен 
 пожертвовать ассоциации, чтобы среднее число первых n + 1пожертвований достигло в среднем 30. После выполнения математики он 
 нашел 149. Он думает, что мог совершить ошибку.
если dons = [14, 30, 5, 7, 9, 11, 15]тогдаnew_avg(dons, 30) --> 149
Не могли бы вы помочь ему?*/

/*function newAvg(arr, newavg) {
    let sum =0;
    let x = 0;
    for(i=0; i <arr.length; i++) {
      sum +=arr[i]
    }
    x = Math.ceil((arr.length + 1) * newavg - sum);
  return(x>0) ? x : ERROR
}

dons = [14, 30, 5, 7, 9, 11, 15];

console.log(newAvg(dons, 100));*/



/*Поклонники The Wire оценят это. Для тех, кто не видел шоу, у Barksdale Organization есть простой метод кодирования телефонных 
номеров, которыми обмениваются через пейджеры: «Перепрыгните на другую сторону от 5 на клавиатуре и поменяйте местами 5 и 0».*/

/*function decode(string) {
  let arr = string.split("");
  return arr.map( i=> ((i == "1") ? "9" :
    (i == "2") ? "8" :
    (i == "3") ? "7" :
    (i == "4") ? "6" :
    (i == "5") ? "0" :
    (i == "6") ? "4" :
    (i == "7") ? "3" :
    (i == "8") ? "2" :
    (i == "9") ? "1" :
    (i == "0") ? "5" : error)).join("")
}
console.log(decode("63849045332"))*/




/*У вас есть сумма денег a0 > 0, и вы вносите ее с процентной ставкой p percent divided by 360 в день на 1st of January 2016. 
Вы хотите иметь сумму a >= a0.
Задача:
Функция date_nb_days(или dateNbDays...) с параметрами a0, a, pвернет в виде строки дату, когда вы только что достигли a.*/

/*function dateNbDays(a0, a, p) {
let sumOneYear = p / 36000 * 365; //360 day
console.log(sumOneYear)
let s = a0 * (1 + sumOneYear )
console.log(s);
let sum = a - a0;
console.log(sum);
let allDays = sum / s * 365;
console.log(allDays)
  let result = new Date("2016-01-01");
  result.setDate(result.getDate() + allDays);
  return result;
}

console.log(dateNbDays(4281, 5087, 2))*/ //Не решенная





/*Ваша задача — реализовать функцию, которая возвращает последние Dцифры целого числа Nв виде списка.*/

/*function lastDigit(n, d) {
 return(d>0) ? String(n).split("").slice(-d).map(Number) : [] 
}
console.log(lastDigit(15243, -1))*/




/*function movie(card, ticket, perc) {
   let priceOneTicket = ticket;
   let sum_1 = 0;
   let sum_2 = card;
   let number_of_purchases = 0;

   while(sum_1 <= Math.ceil(sum_2)) {
    sum_1 += priceOneTicket;

    ticket = ticket * perc;
    sum_2 += ticket

    number_of_purchases += 1;
   }
return number_of_purchases;
};
console.log(movie(500, 15, 0.90))*/



/*Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:*/

/*const removeConsecutiveDuplicates = s => {
 let obj ={}
 let arr = s.split(" ");
 for(i=0; i<arr.length; i++) {
  obj[arr[i]] = arr[i]; 
 }
 return Object.keys(obj).map((key)=> (obj[key])).join(" ")
}*/
//console.log(removeConsecutiveDuplicates("alpha beta ddd beta gamma gamma gamma ddd delta alpha beta beta gamma gamma gamma delta"))




/*Вам дадут слово. Ваша задача будет заключаться в том, чтобы убедиться, что каждый символ в этом слове имеет одинаковое количество вхождений. Вы вернетесь true, если это действительно, или falseесли это не так.*/

function validateWord(s){
let obj ={};
let sum = 0;
s.toLowerCase().split("").forEach(function(x) { obj[x] = (obj[x] || 0)+1; });
for(key in obj) {
  sum += obj[key]
}
return (sum % Object.keys(obj).length == 0) ? true : false;
}

console.log(validateWord("Dgfgjfjd"))