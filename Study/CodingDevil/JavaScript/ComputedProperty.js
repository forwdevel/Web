//Computed property

/*  일반적인 객체 생성
    let a = 'age';

    const user = {
        name: 'Mike',
        age: 30
    }
 */

/*  Computed property

    let a = 'age';

    const user = {
        name: 'Mike',
        [a]: 30   // age : 30
    }
 */

/*  
    const user = {
    [1 + 4] : 5,
    ["안녕"+"하세요"]: "Hello"
    }

    [console]
    => {5: 5, 안녕하세요: "Hello"}
 */

let n = "name";
let a = "age";

const user = {
    [n]: "Mike",
    [a]: 30,
};

console.log(user);