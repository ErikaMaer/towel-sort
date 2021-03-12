
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix === undefined ? [] : matrix.map((a, i) => (i % 2) ? a.reverse() : a).flat();
}
