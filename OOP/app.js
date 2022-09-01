// ------------------ Factory Function
function makeColor(r, g, b){
    const color = {r, g, b}
    return color
}


// --------------------- Prototype
// The methods that the class can call but not shows in the Object
// i.e. Array.prototype.push();   Array.prototype.pop()

// ---- We can add our own prototype functions 
Array.prototype.hey = function (){
    console.log('hey')
}

['1', '2'].hey()

// ---- Or override one --- Do not do this 
// Array.prototype.pop = () =>{

// }




// ------------------------- Constructor Functions
function MyColor(r, g, b){
    this.r = r
    this.g = g
    this.b = b
}

const color = new MyColor(1,2,3)



// --------------------- Create Object with class in JS
class Color{
    constructor(){

    }
    rgb()
    rgba()    
}