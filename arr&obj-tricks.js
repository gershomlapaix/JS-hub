// 1. Initialize and fill an array with default values
const arrSize = 4;
const defaultValues = 0;

const arr = Array(size).fill(defaultValues);


// 2. insert something in the middle of an array
const testArr = [1,2,3,4,4,5];
const index = 2;

const result = [...testArr.splice(0,index), "inserted", ...testArr.splice(index)]

// 3. copy an array
const testArrCopy = [...testArr]

// 4. REmove the duplicates from an array
const uniqueArray = [... new Set(testArr)]

// 5. check if the object is empty
const obj = {}
const totalKeys = Object.keys(obj).length

// 6.check if a property exists on an object
const obj2 = {test: 1}
console.log("test" in obj)

// 7. Loop over an object

const age = {john: 20, max:43}
const keys = forEach(ket => age[key]++)
