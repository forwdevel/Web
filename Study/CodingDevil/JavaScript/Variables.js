//let
//var와 거의 동일
//한번 선언된 변수는 다시 선언 불가

//const

//var(이전버전)
//한번 선언된 변수를 다시 선언할 수 있음
//선언하기 전에 사용할 수 있음
    /*
        ex)
        console.log(name);
        var name = 'Mike';

        error X
    */


    //hoisting
    //스코프 내부 어디서든 변수선언은 최상위에 선언된것처럼 행동하는것
    /*
        var name;   // hoisting
        console.log(name); // undefined
        name = 'Mike';  //할당

        선언은 호이스팅 되지만, 할당은 호이스팅 안됨
    */

    /*
        console.log(name); //ReferenceError
        let name = 'Mike';
    
    */

    //TDZ (Temporal Dead Zone)

    // 호이스팅은 스코프 단위로 동작

    /*
        ex)

        let age = 30;
        function showAge() { // 현재 스코프
            console log(age); // Temporal Dead Zone
            let age = 20;
        }
        showAge();
    */
   

//변수의 생성과정
/*
    1. 선언 단계
    2. 초기화 단계
*/

/*
    var

    1. 선언 및 초기화 단계
    2. 할당 단계
*/

/*
    let

    1. 선언 단계
    2. 초기화 단계
    3. 할당 단계
*/

/*
    const

    1. 선언 + 초기화 + 할당
*/
    

// Scope
/*
    var
    : function-scoped

    let, const
    : block-scoped
    (function, if, for, while, try/catch)
*/
