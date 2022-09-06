import {franc, francAll} from 'franc-all'
import langs from 'langs'

const userInput = process.argv[2]
console.log(userInput)
const inputLanCode = franc(userInput)
console.log(inputLanCode)


if(inputLanCode !== 'und')
    console.log(langs.where('3', inputLanCode).name)