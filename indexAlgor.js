const runTest = require('./test');


// Move item to the start of its own array
runTest(
  {src: ['a','b','c'], indiciesToMove: [2], insertAt:0, dest: undefined}, 
  {expectedSrc: ['c','a','b'], expectedDest: undefined}
)
// cutAndPaste(src, [2], 0 ).join(', ');
// Move item to the middle of its own array
runTest(
  {src: ['a','b','c'], indiciesToMove: [0], insertAt:2, dest: undefined},
  {expectedSrc: ['b','a','c'], expectedDest: undefined}
)
// cutAndPaste(src, [0], 2 ).join(', '));
// Move item to the end of its own array
runTest(
  {src: ['a','b','c'], indiciesToMove: [0], insertAt:3, dest: undefined},
  {expectedSrc: ['b','c','a'], expectedDest: undefined}
)
// cutAndPaste(src, [0], 3 ).join(', ');
// Move items to the middle of their own array
runTest(
  {src: ['a','b','c','d'], indiciesToMove: [0,1], insertAt:3, dest: undefined},
  {expectedSrc: ['c','a','b','d'], expectedDest: undefined}
)
// cutAndPaste(src, [0,1], 3 ).join(', ');
// Move item to the start of another array
runTest(
  {src: ['a','b','c'], indiciesToMove: [2], insertAt: 0, dest: []}, 
  {expectedSrc: ['a','b'], expectedDest: ['c']}
)
// cutAndPaste(src, [2], 0, [] ).join(', ');
// Preseve item order
runTest(
  {src: ['a','b','c'], indiciesToMove: [1,0], insertAt: 0, dest: []}, 
  {expectedSrc: ['c'], expectedDest: ['a','b']}
)
// cutAndPaste(src, [1,0], 0, [] ).join(', ');
console.log('')
