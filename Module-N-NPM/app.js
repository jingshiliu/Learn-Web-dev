const math = require('./math')

console.log(math.add(3, 4))
console.log(math.PI)
console.log(math.square(4))


// In node, when exporting a directory, node will look for "index.js" in the directory
// and export what "index.js" exports

// Make sure the directory has a index.js that exports the thing you want before requires it

const wholeDir = require('./exportsWholeDir')
console.log(wholeDir)


// 
