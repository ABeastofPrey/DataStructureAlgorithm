Array.matrix = function(rows, cols, init=0) {
	let arr = [];
	for (let i = 0; i < rows; i++) {
		let _cols = [];
		for (let j = 0; j < cols; j++) {
			_cols[j] = init++;
		}
		arr[i] = _cols;
	}
	return arr;
};

Array.transpose = function(matrix) {
	let arr = [];
	for (let i = 0; i < matrix[0].length; i++) {
		let cols = [];
		for (let j = 0; j < matrix.length; j++) {
			cols[j] = matrix[j][i];
		}
		arr[i] = cols;
	}
	return arr;
};

let mat = Array.matrix(4, 5);
Array.transpose(mat)