const fs = require('fs');
const data = fs.readFileSync("input.txt", "utf-8").split("\n")

var matrix = Array(1000).fill().map(() => Array(12).fill())

for (var i = 0; i < data.length; i++) {
    var row = String(data[i])
    for (var j = 0; j < row.length; j++) {
        matrix[i][j] = row[j]
    }
}

console.log(matrix);
var gamma = ""
var epsilon = ""


for (var j = 0; j < matrix[0].length; j++) {
    var counter = 0;
    for (var i = 0; i < matrix.length; i++) {
        matrix[i][j] == '0' ? counter++ : --counter
    }
    counter > 0 ? gamma += '0' : gamma += '1'
    counter > 0 ? epsilon += '1' : epsilon += '0'
}

console.log(gamma);
console.log(epsilon);

