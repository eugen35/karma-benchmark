/**
 * Ищет элемент в массиве с помощью indexOf:
 * @param {number[]} array - массив, в котором искать
 * @param {number} value - элемент, который нужно найти в массивк
 * @returns {Number|number|*}
 */
function nativeIndexOf(array, value){
  return array.indexOf(value);
}

/**
 * Ищет элемент в массиве путём перебора в цикле for(var i = 0...):
 * @param {number[]} array - массив, в котором искать
 * @param {number} value - элемент, который нужно найти в массивк
 * @returns {Number|number|*}
 */
function find(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) return i;
  }
  return -1;
}
