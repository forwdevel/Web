//Object methods

//Object.assign({new object componet},object): 객체 복제
/*  잘못된 복제
    const user = {
        name : 'Mike',
        age : 30
    }

    const cloneUser = user;     => (X)
 */

/*  객체 복제
    const user = {
        name : 'Mike',
        age : 30
    }

    const new User = Object.assign({}, user);
    //User 객체를 '{}'에 넣음
    // {} + {name : 'Mike', age : 30}
    // == {name : 'Mike', age : 30}
    //둘이 전혀 다른 객체
*/

/*  더하기
    const user = {
        name : 'Mike',
        age : 30
    }

    const new User = Object.assign({gender:'male'}, user);
    // {gender:'male'} + {name : 'Mike', age : 30}
    // == {gender:'male', name : 'Mike', age : 30}

*/

/*  요소 덮어쓰기
    const user = {
        name : 'Mike',
        age : 30
    }

    const new User = Object.assign({name : 'Tom'}, user);
    // {name : 'Tom'} + {name : 'Mike', age : 30}
    // == {name : 'Mike', age : 30}
    // => 적용 안됨
*/

/*  다중 복제
    const user = {
        name: 'Mike'
    }
    const info1 = {
        age: 30
    }
    const info2 = {
        gender : 'male'
    }

    Object.assign(user, info1, info2);
    // == {gender:'male', name : 'Mike', age : 30}
*/


//Object.keys(object): 키 배열 반환
/*
    const user = {
        name: 'Mike',
        age: 30,
        gender: 'male'
    }

    Object.keys(user);
    // ["name", "age", "gender"]
*/

//Object.keys(object): 값 배열 반환
/*
    const user = {
        name: 'Mike',
        age: 30,
        gender: 'male'
    }

    Object.value(user);
    // ["Mike", 30, "male"]
*/

//Object.entries(): 키/값 배열 반환
/*
    const user = {
        name:   'Mike',
        age:        30,
        gender:  'male'
    }

    Object.entries(user);
    // ["name",   "Mike"],
    // ["age",        30],
    // ["gender", "male"],
*/

//Object.fromEntries(Object): 키/값 배열을 객체로
/*
    const arr = [
        ["name", "Mike"],
        ["age", 30],
        ["gender","male"]
    ];

    Object.fromEntries(arr);
    //{
    //  name: 'Mike',
    //  age: 30,
    //  gender: 'male',
    //}
*/


//Examples
/*
function makeObj(key, val) {
    return {
        [key] : val
    }
}

const obj = makeObj('성별', "male");

console.log(obj);
*/
//---------------------------------------
/*
const user = {
    name: "Mike",
    age: 30,
};

const user2 = user;

console.log(user2);
*/
//---------------------------------------
/*
const user = {
    name: "Mike",
    age: 30,
};

const user2 = user;
user2.name = "Tom";

console.log(user2);
*/
//---------------------------------------
/*
    const user = {
        name: "Mike",
        age: 30,
    };

    const user2 = Object.assign(user);

    console.log(user2); 
*/