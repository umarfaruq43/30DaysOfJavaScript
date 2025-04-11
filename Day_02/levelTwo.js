// Using console.log() print out the following statement:
const qoute = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
// console.log(qoute)

// Using console.log() print out the following quote by Mother Teresa:
const qoute_2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// console.log(qoute_2);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let type_1 = Number('10')
console.log(typeof (type_1));

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const floatNo = Math.ceil(9.8)
console.log(floatNo);

// Check if 'on' is found in both python and jargon
console.log('python'.includes("on"));
console.log('jargon'.includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
const word = "I hope this course is not full of jargon."
console.log(word.includes("jargon"));

// Generate a random number between 0 and 100 inclusively.
const randNo = Math.floor(Math.random() * 101)
console.log(randNo);

// Generate a random number between 50 and 100 inclusively.
const randNo_2 = Math.floor(Math.random() * 49) + 50
console.log(randNo_2);

// Generate a random number between 0 and 255 inclusively.
const randNo_3 = Math.floor(Math.random() * 256)
console.log(randNo_3);

// Access the 'JavaScript' string characters using a random number.
const word_1 = 'JavaScript';
const randNo_4 = Math.floor(Math.random() * word_1.length)
console.log(word_1[randNo_4]);

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const word_2 = "You cannot end a sentence with because because because is a conjunction"
const startPoint = word_2.indexOf("because")
const endPoint = word_2.lastIndexOf("e")
console.log(word_2.substring(startPoint, endPoint + 1));
