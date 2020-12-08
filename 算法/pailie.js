// 有一个数组[1,2,3,4]，请实现算法，得到这个数组的全排列的数组，如[2,1,3,4]，[2,1,4,3]。。。。算法的复杂度是多少

function pailie(arr) {
    if(!arr.isArray()) {
        return
    }
    let res = [];
    if(arr.length === 0)  {
        return res;
    }
    let len = res.length;
    let depth = 0;
    let used = [];

    res.forEach(i => used[i] = false);

    dfs(arr, len, res, depth,used);

    return res;
}


function dfs(arr, len, res, depth, used) {


}


let string = '123456579';

let a = string.split('');

let cursor = 0;
let b = [];
while(cursor < a.length) {
    let temp = a.slice(cursor, cursor+2);
    b.push(temp.join(''));
    cursor+=2;
}



function sliceArr(arr, unit) {
    let b = [];

    if(arr.length === 0) {
        return b;
    }
    let cursor = 0;
    while(cursor < arr.length) {
        let temp = arr.slice(cursor, cursor+unit);
        b.push(temp.join(''));
        cursor+=unit;
    }

    return b;
}