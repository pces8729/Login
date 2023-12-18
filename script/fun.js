// function answer(arr) {
//   arr.sort(function(a, b) {
//     return a - b;
// });

//   let resultArray = [];

//   for (let i = 0; i < arr.length; i++) {

//     let subArray = [arr[i]];

//     while (arr[i] === arr[i + 1]) {
//       subArray.push(arr[i + 1]);
//       i++;
//     }

//     resultArray.push(subArray.length === 1 ? subArray[0] : subArray);
//   }

//   return resultArray
// }

// let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
// let answerA = answer(arr);
// console.log(answerA);

// let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
// arraySort(arr);
// // [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591]

// function arraySort(arr) {
//     // First sort all elements into numeric order.
//     arr.sort(function(a, b) {
//         return a - b;
//     });

//     let counter = 0;
//     arr.forEach(function(num, i) {
//         /*First statement checks the element one by one
//         If elements are equal, it counts how many of similar ones*/
//         if (arr[i] === arr[i + 1]) {
//             counter++;
//         }
//         // second statement finds the last element of similar element.
//         else if (arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]) {
//             /*i-counter is the first index of similar ones
//             i is the last index of similar ones
//             create a new array between similar elements and put it into first index of similar ones*/
//             arr[i - counter] = arr.slice(i - counter, i + 1);
//             // counter is 0 and ready count new similar ones
//             counter = 0;
//         }
//     });
//     /*nested array have been built but need to delete similar ones from original array
//     check the first element of nested array equal to next element and delete it*/
//     arr.forEach(function(num, ind) {
//         while (arr[ind][0] && arr[ind][0] === arr[ind + 1]) {
//             arr.splice(ind + 1, 1);
//         }
//     });
//     return arr;
// }

// console.log(arraySort(arr));



// let arr =  ["1", 2, "4", "591", 392, "391", 2, 5, "10", 2, "1", "1", 1, 20, 20]; // to be sorted
// let number = [];
// let char = [];
// arr.forEach(a => {
//   if (typeof a == 'number') number.push(a);
//   else char.push(a);
// })


// let sorted = number.sort().concat(char.sort());
// console.log(sorted)

// let arr = ["1", 2, "4", "591", 392, "391", 2, 5, "10", 2, "1", "1", 1, 20, 20];

// arrSort(arr);
// // ["1", "4", "591", "391", "10", "1", "1", 2, 392, 2, 5, 2, 1, 20, 20]

// function arrSort(argument) {
//     switch (typeof arr[0]) {
//         case "string":
//             let arr2 = arr.filter(function(num, i) {
//                 return typeof arr[i] == "string";
//             });
//             let arr3 = arr.filter(function(num, i) {
//                 return typeof arr[i] == "number";
//             });
//             arr = arr2.concat(arr3);
//             break;
//         case "number":
//             let arr4 = arr.filter(function(num, i) {
//                 return typeof arr[i] == "number";
//             });
//             let arr5 = arr.filter(function(num, i) {
//                 return typeof arr[i] == "string";
//             });
//             arr = arr4.concat(arr5);
//             break;
//     }
//     return arr;
// }
// console.log(arrSort(arr))

// function findTwoNumbers(arr, target) {
//   // 創建一個物件來追蹤數字和它們的索引
//   let numIndices = {};

//   for (let i = 0; i < arr.length; i++) {
//     // 計算差值，即目標減去當前數字
//     let difference = target - arr[i];

//     // 檢查差值是否已經存在於物件中
//     if (numIndices.hasOwnProperty(difference)) {
//       // 如果存在，返回找到的兩個數字
//       return [difference, arr[i]];
//     }

//     // 否則，將當前數字添加到物件中
//     numIndices[arr[i]] = i;
//   }

//   // 如果沒有找到，返回 null 或其他適當的值
//   return null;
// }

// // 測試函數
// let result = findTwoNumbers([1, 2, 3], 4);
// console.log(result);  // Output: [1, 3]

// function convertColor(color) {
//   // 檢查是否是 HEX 格式（以 # 開頭的六個字符）
//   if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
//     // 將 HEX 轉換為 RGB
//     let hex = color.substring(1); // 去掉 # 符號
//     let bigint = parseInt(hex, 16);
//     let r = (bigint >> 16) & 255;
//     let g = (bigint >> 8) & 255;
//     let b = bigint & 255;
//     return `RGB(${r}, ${g}, ${b})`;
//   }

//   // 檢查是否是 RGB 格式（三個以逗號分隔的數字）
//   if (/^RGB\((\d+),\s*(\d+),\s*(\d+)\)$/.test(color)) {
//     // 將 RGB 轉換為 HEX
//     let matches = color.match(/^RGB\((\d+),\s*(\d+),\s*(\d+)\)$/);
//     let hex = "#" + matches.slice(1).map(val => {
//       let hexVal = parseInt(val).toString(16);
//       return hexVal.length === 1 ? "0" + hexVal : hexVal;
//     }).join("");
//     return hex.toUpperCase();
//   }

//   // 如果格式不正確，返回錯誤信息或其他適當的值
//   return "Invalid color format";
// }

// // 測試函數
// let resultHex = convertColor("#4CAF30");
// console.log(resultHex);  // Output: RGB(76, 175, 80)
// let resultRgb = convertColor("RGB(76, 175, 80)");
// console.log(resultRgb);  // Output: #4CAF50

const object = {
    name: 'sallys',

};
