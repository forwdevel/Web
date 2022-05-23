//Number method

//toString(2) => 10진수 -> 2진수
//toString(16) => 10진수 -> 16진수


//Math method

//Math.PI; => 3.141592~

//Math.ceil(): 올림
/*
let num1 = 5.1;
let num2 = 5.7;

Math.ceil(num1);    // 6
Math.ceil(num2);    // 6
*/

//Math.floor(): 내림
/*
let num1 = 5.1;
let num2 = 5.7;

Math.ceil(num1);    // 5
Math.ceil(num2);    // 5
*/

// 소수점 자리수
/*
    // 소수점 셋째 자리에서 반올림

    let userRate = 30.1234;

    Math.round(userRate * 100)/100 // 30.12

    // 문자열로 반환
    userRate.toFixed(2); // "30.12"
    userRate.toFixed(6); // "30.123400"

    // 숫자로 변환
    Number(userRate.toFixed(2)); // 30.12
*/

// isNaN(): NaN인지 확인
/*
let x = Number('x'); // NaN

x == NaN // false
x === NaN // false
NaN == NaN // false

isNaN(x) //true
isNaN(3) //false
*/

//parseInt(): 문자열을 숫자로, 문자가 있어도 숫자만 골라서 작업
//하지만 숫자가 먼저 오지 않으면 NaN됨
/*
let margin = '10px';
parseInt(margin);   //10
Number(margin); //NaN

let redColor = 'f3';
parseInt(redColor); //NaN
parseInt(redColor, 16); // 243 <= 16진수-> 10진수

parseInt('11', 2)//3 <= 2진수 -> 10진수
*/

//parseFloat(): 문자열의 부동소숫점도 읽음
/*
    let padding = '18.5%';

    parseInt(padding); // 18
    parseFloat(padding); // 18.5
*/

// Math.random()
//0과 1사이 무작위 숫자 생성
/*
    1부터 100사이의 임의의 숫자를 뽑고싶다면,
    Math.floor(Math.random()*100)+1
*/

// Math.max() / Math.min()
/*
    Math.max(1, 4, -1, 5, 10, 9, 5.54); // 10
    Math.min(1, 4, -1, 5, 10, 9, 5.54); // -1
*/

// Math.abs(): 절대값
/*
    Math.abs(-1) // 1
*/

// Math.pow(n, m): 제곱
/*
    Math.pow(2, 10); // 1024 <= 2의 10승
*/

// Math.sqrt(): 제곱근
/*
    Math.sqrt(16) // 4
*/