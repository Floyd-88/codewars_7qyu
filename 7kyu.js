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
}
console.log(removeConsecutiveDuplicates("alpha beta ddd beta gamma gamma gamma ddd delta alpha beta beta gamma gamma gamma delta"))
*/



/*Вам дадут слово. Ваша задача будет заключаться в том, чтобы убедиться, что каждый символ в этом слове имеет одинаковое количество вхождений. Вы вернетесь true, если это действительно, или falseесли это не так.*/

/*function validateWord(s){
let obj ={};
let sum = 0;
s.toLowerCase().split("").forEach(function(x) { obj[x] = (obj[x] || 0)+1; });
for(key in obj) {
  sum += obj[key]
}
return (sum % Object.keys(obj).length == 0) ? true : false;
}

console.log(validateWord("Dgfgjfjd"))*/



/*Given a non-negative integer, return an array / a list of the individual digits in order.
Examples:
123 => [1,2,3]*/

/*function digitize(n) {
return String(n).split("").map(i => +i);
}

console.log(digitize(123))*/



/*множьте все цифры неотрицательного целого числа nдруг на друга, повторяя с произведением, пока не получится одна цифра. 
Требуемое количество шагов называется мультипликативной устойчивостью .*/

/*function per(n) {
  let result = [n];
  while(result[result.length-1] > 9) {
    let sum = result[result.length-1].toString().split("").reduce((a, i) => a*i)
    result.push(sum)
  }
  return result.splice(1)
}
console.log(per(277777788888899))*/


 /*Дан массив с числами. Найдите сумму этих чисел. Показать решение.*/

/*let arr = [1, 2, 3, 0, 4, 5, 6];

let result = arr.reduce( (accum, item)=> {
    accum += item;
    return accum;
})
console.log(result)*/

 /*Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 
 элемента, так как дальше стоит элемент с числом 0. Показать решение.*/
/*var arr = [1, 2, 3, 0, 4, 5, 6];
var answer = 0;

var result = arr.reduce(function(sum, elem) {
  console.log(sum)
  console.log(elem)
  if (elem == 0) {
    answer = sum;
  } else {
    return sum + elem;
  }
});

if(answer == undefined){answer = result};
console.log(answer)*/




/* Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем
 последние 3 элемента, так как дальше стоит элемент с числом 0. Показать решение.*/
/*var arr = [2, 0, 1];
var answer = 0;

var result = arr.reduceRight(function(sum, elem) {
  if (elem == 0) {
    answer = sum;
  } else {
    return sum + elem;
  }
});

console.log(answer)*/


/* Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. 
Показать решение.*/
// let num = 0;
// let arr = [1, 2, 8, 0, 9, 37, 6];
// function func(arr){
// let col = 1;
// if(num === 0 ){
// arr.reduceRight(function(sum, elem) {
//  if(sum > 10) {
//   num = col;
//   alert(num)
//  } else{
//   col++;
//   return sum + elem; }
//   });
// }else {console.log(num)}
// }
// func(arr)
// console.log(num)



/*Дополнение до единиц двоичного числа — это число, полученное путем замены всех нулей на 1 и всех 1 на 0. Например:*/


/*function onesComplement(n) {
  return [...n].map(i => (i != 1) ? 1 : 0).join("")
};

console.log(onesComplement("10101"))*/



/*Вам будет предоставлен массив объектов, представляющих данные о разработчиках, которые подписались на участие в следующей 
встрече программистов, которую вы организуете. Ваша задача — вернуть объект, который включает в себя количество вариантов еды,
 выбранных разработчиками в форме регистрации на встречу. .*/

/* function orderFood(list) {
return list.reduce( (x, i) =>  ({...x, [i.meal]: (x[i.meal] || 0) + 1}), {})
}

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];

console.log(orderFood(list1));*/




/*Вам будет предоставлен массив объектов, представляющих данные о разработчиках, которые подписались на участие в следующей 
встрече программистов, которую вы организуете. напишите функцию, которая при выполнении findAdmin(list1, 'JavaScript')возвращает 
только тех разработчиков JavaScript, которые являются администраторами GitHub:*/

/*var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

function findAdmin(list, lang) {
  return list.filter(i => i["language"] === lang && i["githubAdmin"] === "yes")
}
console.log(findAdmin(list1, 'JavaScript'))*/




/*Вам будет предоставлен массив объектов (хэшей в ruby), представляющих данные о разработчиках, которые подписались на участие в 
встрече программистов, которую вы организуете впервые. Ваша задача — вернуть количество разработчиков JavaScript из Европы .*/

/*var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

function countDevelopers(list) {
return list.filter(i => i["continent"] === "Europe" && i["language"] ==="JavaScript").length
}
console.log(countDevelopers(list1))*/


/*Ваша задача — вернуть массив, в котором каждый объект будет иметь новое свойство «приветствие» со следующим строковым 
значением:
Привет, <имя здесь>, что тебе больше всего нравится в <языке здесь>?*/

/*var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

function greetDevelopers(list) {
return list.map(p => p.firstName === false ? p : 
  {...p, greeting: `Hi ${p["firstName"]}, what do you like the most about ${p["language"]}?` })
}

console.log(greetDevelopers(list1))*/



/*Ваша задача вернуть:
true если хотя бы один разработчик Ruby зарегистрировался; или false если не будет разработчиков Ruby.*/

/*var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

function isRubyComing(list) {
return list.some(i => i.language === "Ruby")
}
console.log(isRubyComing(list1))*/



/*Ваша задача — вернуть одну из следующих строк:
< firstName here >, < country here > первого зарегистрировавшегося разработчика Python; или
There will be no Python developersесли ни один разработчик Python не подписался.*/

/*var list1 = [
 {"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"JavaScript"},
 {"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":30,"language":"Python"},
 {"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":19,"language":"Clojure"}
];


function getFirstPython(list) {
let str = "There will be no Python developers"
let result = list.filter(i => i.language === "Python")
return (result.length != 0) ? result[0].firstName + ", " + result[0].country : str
}

console.log(getFirstPython(list1));*/


/*Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language 
represented at the meetup.*/

/*var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

function countLanguages(list) {
 return list.reduce( (a, i) => 
  ({...a, [i.language]: (a[i.language] || 0) + 1}), {})
}

console.log(countLanguages(list1));*/


/*Your task is to return either:
true if all developers in the list code in the same language; or
false otherwise.*/
/*var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

function isSameLanguage(list) {
 return list.every(i => i.language === list[0].language)
}

console.log(isSameLanguage(list1))*/


/*Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age 
senior developers listed in the same order as they appeared in the original input array.*/
/*var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 56, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

function findSenior(list) {
return list.filter( (a) => a.age === Math.max(...list.map(i => i.age)) )
}
console.log(findSenior(list1))*/

/*Your task is to return:
true if all of the following continents / geographic zones will be represented by at least one developer: 
'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.*/

/*var list1 = [
{"firstName":"Alexander","lastName":"F.","country":"Russia","continent":"Europe","age":89,"language":"Java"},
{"firstName":"Fatima","lastName":"K.","country":"Saudi Arabia","continent":"Asia","age":21,"language":"Clojure"},
{"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"JavaScript"},
{"firstName":"Nikola","lastName":"H.","country":"Serbia","continent":"Europe","age":29,"language":"Python"},
{"firstName":"Jakub","lastName":"I.","country":"Slovakia","continent":"Asia","age":28,"language":"Java"},
{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Americas","age":89,"language":"JavaScript"},
{"firstName":"Luka","lastName":"J.","country":"Slovenia","continent":"Oceania","age":29,"language":"Clojure"},
{"firstName":"Mariam","lastName":"B.","country":"Egypt","continent":"Africa","age":89,"language":"Python"}]


function allContinents(list) {
let arr = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
let result = [...new Set(list.map( i => i.continent))];
return arr.length === result.length && arr.sort().every(function(value, index) { return value === result.sort()[index]})
}
console.log(allContinents(list1))*/



/*Your task is to return:
true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, 
seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.*/

/*var list1 = [
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 199, language: 'PHP' },
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 10, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 199, language: 'PHP' },

];

function isAgeDiverse(list) {
  let result = list.map(i => i.age).sort((a,b) => a -b)
  let last_el = result.pop();
  let first_el = result.shift();
  let arr =[];
 let age_arr =  [30, 40, 50, 60, 70, 80, 90, 100].every( (x, i, arr) => result.some(y => y < x && y >= arr[i] - 10) )
  arr.push(age_arr);
(last_el >= 100 && last_el <= 199) ? arr.push(true) : arr.push(false);
(first_el >= 0 && first_el <= 19) ? arr.push(true) : arr.push(false);
return arr.every(i => i === true)
}

console.log(isAgeDiverse(list1))*/



/*The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.
Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.*/

/*var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

function addUsername(list) {
let year_now = new Date().getFullYear();
list.map(i => i.username = i.firstName.toLowerCase() + i.lastName[0].toLowerCase() + String(year_now - i.age))
return list
}

console.log(addUsername(list1));*/


/*write a function that returns the average age of developers (rounded to the nearest integer). In the example above your 
function should return 50 (number).*/
/*var list1 = [{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"Ruby"},
{"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"}];

function getAverageAge(list) {
  let result = (list.length === 1) ? list[0].age : list.reduce((accum, item) => (accum + item.age),0 )
  return Math.round(result / list.length)
 }

console.log(getAverageAge(list1))*/


/*Your task is to return either:
true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than 
the number of developers representing any of the remaining programming languages**; or false otherwise.*/

/*var list1 = [{"firstName":"George","lastName":"B.","country":"England","continent":"Europe","age":21,"language":"JavaScript"},{"firstName":"Jakub","lastName":"I.","country":"Slovakia","continent":"Europe","age":28,"language":"JavaScript"},{"firstName":"Marian","lastName":"N.","country":"Colombia","continent":"Americas","age":55,"language":"JavaScript"},{"firstName":"Krishna","lastName":"G.","country":"Nepal","continent":"Asia","age":22,"language":"Python"},{"firstName":"Joao","lastName":"D.","country":"Portugal","continent":"Europe","age":35,"language":"JavaScript"},{"firstName":"Mia","lastName":"H.","country":"Germany","continent":"Europe","age":39,"language":"Ruby"},{"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":19,"language":"Ruby"},{"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},{"firstName":"Sofia","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"JavaScript"},{"firstName":"Noah","lastName":"M.","country":"Switzerland","continent":"Europe","age":19,"language":"JavaScript"},{"firstName":"Nikau","lastName":"R.","country":"New Zealand","continent":"Oceania","age":39,"language":"JavaScript"},{"firstName":"Nor","lastName":"E.","country":"Malaysia","continent":"Asia","age":21,"language":"Python"},{"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"Ruby"},{"firstName":"Maria","lastName":"I.","country":"Greece","continent":"Europe","age":32,"language":"Python"},{"firstName":"Fatima","lastName":"H.","country":"Pakistan","continent":"Asia","age":28,"language":"JavaScript"},{"firstName":"Emily","lastName":"A.","country":"Northern Ireland","continent":"Europe","age":32,"language":"Python"},{"firstName":"Margret","lastName":"M.","country":"Iceland","continent":"Europe","age":28,"language":"Ruby"},{"firstName":"Luka","lastName":"J.","country":"Slovenia","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":35,"language":"Ruby"},{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},{"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript"},{"firstName":"Laia","lastName":"P.","country":"Andorra","continent":"Europe","age":55,"language":"Ruby"}]

function isLanguageDiverse(list) {
let num_key = list.reduce( (acc, i) => ({ ...acc, [i.language]: (acc[i.language] || 0) + 1 }),[]);
let result = Object.values(num_key).sort((a, b) => (a-b))
return (result[result.length - 1] / result[0] > 2 || result.length < 3) ? false : true;
}

console.log(isLanguageDiverse(list1))*/



/*напишите функцию, которая при выполнении as findOddNames(list1)возвращает только разработчиков, где , если вы добавите ASCII-
представление всех символов в их именах, результатом будет нечетное число :*/

/*var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  

];

function findOddNames(list) {
let result = list.map(i => i.firstName.split("")).map( (x, i) => {
return x.map(a => {
  return a.charCodeAt()
}) 
}).map( (i) => {
return i.reduce( (acc2, n) => {
  return acc2 + n
})
}).map((a, i, arr) => {
  if(arr[i] % 2 !=0) {return list[i]} })

return result.filter(i => i != undefined)
}

console.log(findOddNames(list1))

console.log('ABC'.charCodeAt(2))*/