// Spread Syntax(전개 구문): 배열

/** Example 
 * 
 * let arr1 = [1, 2, 3];
 * let arr2 = [4, 5, 6];
 *   
 * // arr1과 arr2의 모든 요소를 배열로 가짐
 * let result = [...arr1, ...arr2];
 * 
 * let result2 = [0, ...arr1, ...arr2, 7, 8, 9];
 *   
 * console.log(result); // [1, 2, 3, 4, 5, 6]
 * console.log(result2); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */


// Spread Syntax(전개 구문): 복제

/** Example 1
 * 
 * let arr = [1, 2, 3];
 * let arr2 = [...arr]; // [1, 2, 3]
 
 * let user = { name: 'Mike', age: 30 };
 * let user2 = {...user };
 
 * user2.name = "Tom";
 
 * console.log(user.name); // "Mike"
 * console.log(user2.name); // "Tom"
 */

/** Example 2
 *  (arr1을 [4, 5, 6, 1, 2, 3]으로)
 */

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// reverse() 안해주면, [6, 5, 4, 1, 2, 3] 나옴
// arr2.reverse().forEach((num) => {
//     arr1.unshift(num);
// });
// [4, 5, 6, 1, 2, 3]

// 전개구문 사용
arr1 = [...arr2, ...arr1];
// [4, 5, 6, 1, 2, 3]

console.log(arr1);