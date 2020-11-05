
let arr = [1,2,3,4];


function output(arr) {
    for(let i =0; i< arr.length; i++) {
        setTimeout(() => {
            console.log('out', arr[i]);
        }, i*1000);
    }
}

// output(arr);



// if([] == false) {
//     console.log(1);
// }

// if({} == false) {
//     console.log(2);
// }

// if([]) {
//     console.log(3);
// }


function throttle(fn, delay) {
    let preTime = Date.now();
    console.log(999);
    return function(...args) {
        let now = Date.now();
        console.log('now', now, preTime, now-preTime);
        if(now - preTime > delay) {
            console.log(222);
            preTime = now;
            fn.apply(this, args);
        }
    }
}

function out() {
    console.log(111);
}

throttle(out, 1000)();

console.log(333);

throttle(out, 1000)();


function bind(t) {

}





function quickSort(array) {
    if(array.length <= 1) return array;

    let left = [];
    let right = [];
    let pivotIndex = Math.floor(array.length /2);
    let pivot = array.splice(pivotIndex, 1)[0];


    for(let i = 0; i< array.length; i++) {
        if(array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));

}



function myCall(context, ...args) {
    if(typeof this !== 'function') {
        throw new Error();
    }

    context = (typeof context === 'object' ? context : window)
    context.fn = this;

    console.log('args', args);

    let result = context.fn(...args);

    delete context.fn;
    return result;
}


function myApply(context, args) {
    context = typeof context === 'object' ? Object : window;
    context.fn = this;

    let res = context.fn(...args);

    delete context.fn;

    return res;
}






function quickSort(array) {
    if(array.length <= 1) return array;

    let left = [];
    let right = [];
    let pivotIndex = Math.floor(array.length /2);
    let pivot = array.splice(pivotIndex, 1)[0];


    for(let i = 0; i< array.length; i++) {
        if(array[i] <= pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));

}



function myCall(context, ...args) {
    if(typeof this !== 'function') {
        throw new Error();
    }

    context = (typeof context === 'object' ? context : window)
    context.fn = this;

    console.log('args', args);

    let result = context.fn(...args);

    delete context.fn;
    return result;
}


function myApply(context, args) {
    if(typeof this !== 'function') {
        throw new Error();
    }
    context = typeof context === 'object' ? Object : window;
    context.fn = this;

    let res = context.fn(...args);

    delete context.fn;

    return res;
}