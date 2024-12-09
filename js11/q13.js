// * ===============================1========================================

/*
 ? look at the code below:
 ? make a sentence by concatenating the object keys 
*/
const object1 = {
  ali: 'name',
  writes: 'does what',
  novels: 'kind of book',
};

// output => 'ali writes novels'
 const keys = Object.keys(object1)






////answer/////////



console.log(`my best friend ${keys[0]} ${keys[1]} ${keys[2]}`) 


//////////////////////////or//////////////////////////

console.log(...keys)  //simple example