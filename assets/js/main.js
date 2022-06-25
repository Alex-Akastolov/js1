console.log('Sample JavaScript #1 HW #13');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

// имя переменной: myNum, значение: 10
var myNum = 10;
console.log(myNum)

// имя переменной: myStr, значение: 'строка'
var myStr = 'строка';
console.log(myStr)

// имя переменной: myBool, значение: true
var myBool = true;
console.log(myBool)

// имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myArr = [1, 2, 3, 4, 5];
console.log(myArr)

// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
var myObj = {
    first: 'First Name',
    last: 'Last Name'
};
console.log(myObj)




console.log('-------------')
/*
* #2
*
* Отформатируйте целое число, которое хранится в переменной myNum,
* чтобы получить результат с 2 знаками после запятой.
* Результат сохраните в переменную decimal2.
*/

// decimal2

var decimal2 = myNum.toFixed(2);
console.log(decimal2)


console.log('-------------')
/*
* #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

// i

var i = 1;

console.log(++i);
console.log(i++);
console.log(i);
console.log(--i);
console.log(i--);
console.log(i);


console.log('-------------')
/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

// myTest
var myTest = 20;

// +=
myTest += 15;
console.log('+=', myTest)

// –=
myTest -= 10;
console.log('-=', myTest)

// *=
myTest *= 4;
console.log('*=', myTest)

// /=
myTest /= 4;
console.log('/=', myTest)

// %=
myTest %= 20;
console.log('%=', myTest)



console.log('-------------')


/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi

var myPi = Math.PI;
console.log('myPi:', myPi)

console.log('-------------')


// округленное значение числа 89.279 → myRound
var num = 89.279;
var myRound = Math.round(num);
console.log('myRound:',myRound)

console.log('-------------')


// случайное число между 0..10 → myRandom

var myRandom = Math.random() * 10;
console.log('myRandom:',myRandom)

console.log('-------------')

// 3 в 5 степени → myPow

var myPow = Math.pow(3, 5);
console.log('myPow:',myPow)

console.log('-------------')


/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

// Мама мыла раму, рама мыла маму

// strObj

var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log('strObj = ', strObj)

console.log('-------------')


/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

// isRamaPos

var isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos:', isRamaPos)

console.log('-------------')


/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace

var strReplace = strObj.str.replace('мыла', 'моет');

strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');

console.log('strReplace:', strReplace)


console.log('-------------')


/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */

console.log('что нибудь'.toUpperCase())
console.log('ЧТО НИБУДЬ'.toLowerCase())

console.log('-------------')
