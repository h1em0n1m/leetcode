/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
    const hash = {};
    for(let i = 0; i < arr.length; i ++) {
      const cur = arr[i];
      if(hash[cur] !== undefined) {
        return true;
      }
      hash[cur / 2] = cur;
      hash[cur * 2] = cur;
    }
  return false;
};