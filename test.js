const cutAndPaste = require('./cut-and-paste')

function runTest(args, expected){
  const {src, indiciesToMove, insertAt, dest} = args;
  const {expectedSrc, expectedDest} = expected;
  try{
    cutAndPaste(src, indiciesToMove, insertAt, dest);
    assertEqual(src, expectedSrc);
    assertEqual(dest, expectedDest);
    process.stdout.write('.');
  } catch (e) {
    console.log('')
    console.log(e);
  }
}

function assertEqual(arr1, arr2){
  const isEqual = (() => {
    if(arr1 == undefined && arr2 == undefined)
      return true;

    if(arr1.length != arr2.length)
      return false;

    for(let i in arr1){
      if(arr1[i] != arr2[i]){
        return false;
      }
    }

    return true;
  })();

  if(!isEqual){
    throw new Error(`Expected ${arr1} to have the same values as ${arr2}`);
  }
}

module.exports = runTest;