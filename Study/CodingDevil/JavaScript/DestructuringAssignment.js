// Destructuring assignment
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서
// 그 값을 변수에 담을 수 있게 하는 표현식


// Array Destructuring Assignment
/** Example (common)
 *   
 *  let users = ['Mike', 'Tom', 'Jane'];
 *  let [user1, user2, user3] = users;
 * 
 *  console.log(user1); // 'Mike'
 *  console.log(user2); // 'Tom'
 *  console.log(user3); // 'Jane'
 */

/** Example (split)
 * 
 * let str = "Mike-Tom-Jane";
 * 
 * let [user1, user2, user3] = str.split('-');
 * 
 * console.log(user1); // 'Mike'
 * console.log(user2); // 'Tom'
 * console.log(user3); // 'Jane'
 */

/** Example (Default value => Undefined)
 * 
 * let [a,b,c] = [1,2];
 * // c : undefined => 기본값을 받음
 * 
 * let [a=3, b=4, c=5] = [1,2];
 * 
 * console.log(a); // 1
 * console.log(b); // 2
 * console.log(c); // 5 (undefined)
 */

/** Example (Ignore)
 *  // 일부 반환값 무시
 * 
 * let [user1, , user2] = ["Mike", "Tom", "Jane", "Tony"];
 * // 1, 3번 무시됨
 * 
 * console.log(user1);  // "Mike"
 * console.log(user2);  // "Jane"
 */

/** Example (Swap)
 *  
 * let a = 1;
 * let b = 2;
 * 
 * [a, b] = [b, a];
 */


// Object Destructuring Assignment

/** Example (Common)
 * 
 * let user = {name: "Mike", age: 30};
 * let {name, age} = user;
 * 
 * console.log(name); //"Mike"
 * console.log(age); // 30
 */