/**
 * 842. Split Array into Fibonacci Sequence
 * @param {string} S
 * @return {number[]}
 */

var splitIntoFibonacci = function(S) {
    let origin = S.split('');
    let depth = 1;
    let res = [];
    let temp = origin;
    let data = validTemp(origin,depth, temp, res);
  	console.log('res', res, data);
  	return data;

};

function validTemp(origin,depth, temp, res) {
     for(let i = 0; i < temp.length ; i++ ) {
        if(temp[i] + temp[i+1] === temp[i+2]) {
            res.push(temp[i]);
          	res.push(temp[i+1]);
          	res.push(temp[i+2]);
          	//console.log('2222', res);
          	if(i+2 === temp.length -1) {
             console.log('2222', res);
             break;
            }
        } else {
            depth++;
          	//console.log('depth', depth, origin.length / depth);
          	if(origin.length / depth >= 3) {

              temp = splitArr(origin, depth);
              //console.log('temp', temp);
              validTemp(origin, depth, temp, res);
            }
          	break;
        }
    }

  	console.log('1111 res', res);

    return res;

}

function splitArr(arr, unit) {

    let b = [];

    if(arr.length === 0) {
        return b;
    }
    let cursor = 0;
    while(cursor < arr.length) {
        let temp = arr.slice(cursor, cursor+unit);
      	let number = temp.join('');
      	number = +number;
      	//console.log('numer', number);
        b.push(number);
        cursor+=unit;
    }

    return b;
}



splitIntoFibonacci('123456579');

