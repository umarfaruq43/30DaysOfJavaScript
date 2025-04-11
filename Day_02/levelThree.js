// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const findingLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
const pattern = /love/gi
const NoOfLove = findingLove?.match(pattern)
console.log(NoOfLove?.length);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const numberText = 'You cannot end a sentence with because because because is a conjunction'
console.log(numberText.match(/because/gi).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const cleanWord = sentence.replace(/[$&@%#;!]/gi, "")
console.log(cleanWord);

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const workText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const money = workText?.match(/\d+/gi)
console.log(Number(money[0]) + Number(money[1]) + Number(money[2]));
