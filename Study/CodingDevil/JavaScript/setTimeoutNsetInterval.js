// setTimeout(func, milis, 인수)
// 일정 시간이 지난 후 함수를 실행

// setInterval(func, milis, 인수)
// 일정 시간 간격으로 함수를 반복
// setTimeout과 비슷하며, 단지 반복할 뿐

// clearTimeout(tId)
// 예정된 setTimeout을 없애줌
// 계속 반복되는 setInterval을 중단할 때도 사용

// 주의사항
// milis를 0으로 줘도 바로 실행되지 않는다.
// 스케줄 함수는 나중에 실행 됨.
// 약 4ms의 대기 시간이 있음



// setTimeout Examples

// Example 1 (func, milis)
function fn() {
    console.log(3)
}
/** 위와 동일 함수
 * setTimeout(function(){
 *      console.log(3)
 * }, 3000);
 */

setTimeout(fn, 3000); // 3초 후 fn 실행


// Example 2 (func, milis, 인수)
function showName(name) {
    console.log(name);
}

setTimeout(showName, 3000, 'Mike');



// setInterval Examples

// Example 1
// (1초가 지날때마다 로그 출력, 5초까지만)
let num = 0;

function showTime() {
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if (num > 5) {
        clearInterval(tId);
    }
}

const tId = setInterval(showTime, 1000);