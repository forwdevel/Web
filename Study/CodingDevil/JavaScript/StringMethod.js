// '와 "와 `는 사실상 동일
// 상황에 맞게 쓰면 됨

// html 코드는 중간에 ""가 들어가서 ''로 감싸는게 편함
// ex) <div class="box_title">제목</div>

// 이런경우는 ""로 감싸는게 편함
// ex) let desc = "It's 3 o'clock."

// 인수를 쓸때는 `를 쓰는게 편함
// ex) let add = `2 더하기 3은 ${2+3}.`;

// 여러줄 표현하려면 \n이 필요, 줄바꿈하면 에러남
// ex) let add = "1번쨰줄
//                  2번째줄" => 에러

// .length: 문자열 길이

// 특정 위치 접근
/*
    let desc = '안녕하세요.';

    desc[2] // '하'
*/

//toUpperCase() / toLowerCase()
//모든 영문 변환

// .indexOf(text): 몇번쨰 자리에 그 문자열이 있는지
/*
    let str = "Hi guys. Nice to meet you.";

    str.indexOf('to'); // 14
    str.indexOf('man'); // -1
*/
/*
    let str = "Hi guys. Nice to meet you.";

    str.indexOf('to'); // 14
    str.indexOf('man'); // -1

    // 0은 false로 인식
    if(str.indexOf('Hi)){ // str.indexOf('Hi) == 0 (첫번째 문장이라)
        console.log('Hi가 포함된 문장입니다.');
    }

    // 올바른 방법
    if(str.indexOf('Hi) > -1){ // str.indexOf('Hi) == 0 (첫번째 문장이라)
        console.log('Hi가 포함된 문장입니다.');
    }
*/

// str.slice(n,m): n부터 m까지의 문자열을 반환
// m이 없으면 문자열 끝까지
// m이 양수면 그 숫자까지(포함하지 않음)
// m이 음수면 끝에서부터 셈
/*
    let desc = "abcdefg";

    desc.slice(2)       // "cdefg"
    desc.slice(0.5)     // "abcde"
    desc.slice(2,-2)    // "cde"
*/

// str.substring(n,m): n과 m사이 문자열 반환
// n과 m을 바꿔도 동작
// '~부터 ~까지'보다는 '~와 ~의 사이'라는 의미로 보는게 편함
// 음수는 0으로 인식
/*
    let desc = "abcdefg";

    desc.substring(2, 5); // "cde"
    desc.substring(5, 2); // "cde"
*/

// str.substr(n,m): n부터 m개를 가져옴
/*
    let desc = "abcdefg";

    desc.substr(3, 3); // "def"
    desc.substr(2, 2); // "cd"
*/

// str.trim(): 앞뒤 공백제거
/*
let desc = " coding            ";

desc.trim(); // "coding"
*/

// str.repeat(n): n번 반복
/*
    let hello = "hello!";

    hello.repeat(3); // "hello!hello!hello!"
*/

// 문자열 비교
// => 아스키 코드로 비교
/* ex)
    "a" < "c"

    // 아스키 코드값 얻는법
    "a".codePointAt(0); // 97

    // 아스키코드를 문자로 바꾸는법
    String.fromCodePoint(97); //"a"
*/


//Example
/*
let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];

for (let i = 0; i < list.length; i++){
    newList.push(
        list[i].slice(4) // 4부터 끝까지 (숫자는 빼고 문자열만)
    )
}

console.log(newList);
*/

// Example
// 금칙어 : 콜라

function hasCola(str) {
    if (str.indexOf('콜라') > -1) {
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과');
    }
}

// includes
// 문자가 있으면 true
// 없으면 false
function isCola(str) {
    if (str.includes('콜라')) {
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과');
    }
}

hasCola("와 사이다가 짱이야!")
hasCola("무슨소리, 콜라가 최고!")
hasCola("콜라")

isCola("와 사이다가 짱이야!")
isCola("무슨소리, 콜라가 최고!")
isCola("콜라")