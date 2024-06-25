function makeLine(size, char = '#') {
    let line = '';
    for (let i = 0; i < size; i++){
        line += char;
    }
    return line;
}

function makeRectangle(width, height, char = '#') {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width, char)) + '\n';
    }
    return rectangle.slice(0,-1);
}

function makeSquare(size, char = '#'){
   return makeRectangle(size, size, char)
}

function makeDownwardStairs (height, char = '#') {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += makeLine(i + 1, char) + ('\n');
    }
    return stairs.slice(0,-1);
}

function makeSpaceLine(numSpaces, numChars, char = '#') {
    let spaces = '';
    let hashes = '';
    for (let i = 0; i < numSpaces; i++) {
        spaces += ' ';
    }
    for (let i = 0; i < numChars; i++) {
        hashes += char;
    }
    return spaces + hashes + spaces;
}

function makeIsoscelesTriangle(height, char = '#') {
    let triangle = '';
    for (i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1, char) + '\n');
    }
    return triangle.slice(0,-1);
}

function makeDiamond(height, char) {
    let topHalf = makeIsoscelesTriangle(height, char);
    let topHalfLines = topHalf.split('\n');
    let bottomHalfLines = topHalfLines.slice(0,-1).reverse();
    let diamond = topHalfLines.join('\n') + ('\n') + bottomHalfLines.join('\n')
    return diamond;
}