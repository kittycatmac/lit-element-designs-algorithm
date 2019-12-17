/**
 * Moves items from one array to another. If only a source
 * array is provided it will move elements within the source array
 * 
 * @param source An array of values to cut from
 * @param indiciesToMove An array of indicies to remove 
 *    from the source array 
 * @param insertAt The location to move the cut values to.  This should be        the new index for the first element of the pasted values.
 * @param dest optional An array to insert the cut values into. 
 *    If not provided, the cut values should be re-inserted 
 *    into the source array at the insertAt location relative 
 *    to the source array before cutting values.
 */
var src = ['a','b','c'];
src.join(', ');
cutAndPaste(src, [2], 0 ).join(', ');
cutAndPaste(src, [0], 2 ).join(', ');
cutAndPaste(src, [0], 3 ).join(', ');
cutAndPaste(src, [0,1], 3 ).join(', ');
cutAndPaste(src, [2], 0, [] ).join(', ');
cutAndPaste(src, [1,0], 0, [] ).join(', ');

function cutAndPaste(src, indicesToMove, insertAt, dest) {
  console.log(src);

  var oldIndex = src.indexOf(indicesToMove);
  if (oldIndex > -1){
      var newIndex = (oldIndex + insertAt);

    if (newIndex < 0){
        newIndex = 0
    }else if(newIndex >= src.length){
      newIndex = src.length
    }
    srcClone = src.slice();
    srcClone.splice(oldIndex,1);
    srcClone.splice(newIndex,0,indicesToMove);

    return srcClone
  }
  return src
  console.log(srcClone);
}

module.exports = cutAndPaste;