class CustomNumber extends Array {
  increment() {
    let reversed = this.reverse(); // reversed = [3,2,1]
    for (let i = 0; i < this.length; i++) {
      if (reversed[i] < 9) {
        reversed[i]++;
        return reversed.reverse();
      } else {
        reversed[i] = 0;
      }
      if (reversed[this.length - 1] === 0) {
        reversed.push(1);
        return reversed.reverse();
      }
    }
  }
}

console.log('TEST #1: unit is less than 9')
let num = new CustomNumber(1,2,3);
console.log('num: ' + num);
let myNum = num.increment();
console.log('num + 1: ' + myNum);
let result = [1,2,4];
console.log(myNum.toString() === result.toString());

console.log('TEST #2: unit equals 9')
num = new CustomNumber(1,2,9);
console.log('num: ' + num);
myNum = num.increment();
console.log('num + 1: ' + myNum);
result = [1,3,0];
console.log(myNum.toString() === result.toString());

console.log('TEST #3: unit and tens equals 9')
num = new CustomNumber(1,9,9);
console.log('num: ' + num);
myNum = num.increment();
console.log('num + 1: ' + myNum);
result = [2,0,0];
console.log(myNum.toString() === result.toString());

console.log('TEST #4: needs new digit')
num = new CustomNumber(9,9,9);
console.log('num: ' + num);
myNum = num.increment();
console.log('num + 1: ' + myNum);
result = [1,0,0,0];
console.log(myNum.toString() === result.toString());

