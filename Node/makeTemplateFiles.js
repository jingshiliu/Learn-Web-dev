const fs = require('fs')
const folderName = process.argv[2] || 'Project'

// fs.mkdir('Template', err =>{
//     console.log('in the callback')
//     if (err) throw err
// })
// console.log('After create the dir')

fs.mkdirSync(folderName)

    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/style.css`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
