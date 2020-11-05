// # 算法题
// ## '1, 3, 5, 7, 8, 10' =>  1,3,5,7~8,10

function getContinueNum(string) {
  let arr = string.split(",");
  let res = [];
  let start = 0;
  let end = 1;
  arr = arr.map(item => +item);

  for (let i = 0; i < arr.length; i++) {
    if(i === arr.length - 1) {
        if(start === i) {
            res.push(`${arr[start]}`)
        } else {
            res.push(`${arr[start]}~${arr[i]}`)
        }
    } else {
        if(arr[i]+1 === arr[end]) {
            end++;
        } else if(arr[i]+1 < arr[end]) {
          if(start === i) {
              res.push(`${arr[start]}`)
          } else {
              res.push(`${arr[start]}~${arr[i]}`)
          }
          start=end;
          end++;
        }
    }
  }
  return res.join(',');
}

getContinueNum('1, 3, 5, 7, 8, 10');


const nums1 = [1, 2, 3, 5, 7, 8, 10];
function simplifyStr(num) {
  var result = [];
  var temp = num[0]
  num.forEach((value, index) => {
    if (value + 1 !== num[index + 1]) {
      if (temp !== value) {
        result.push(`${temp}~${value}`)
      } else {
        result.push(`${value}`)
      }
      temp = num[index + 1]
    }
  })
  return result;
}
console.log(simplifyStr(nums1).join(','))