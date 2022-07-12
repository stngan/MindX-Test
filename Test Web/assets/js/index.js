// Kiến thức về JS-------------------------------------------------------------------

// 1. Có bao nhiêu cách viết vòng lặp for? Nêu cấu trúc phù hợp với các loại vòng lặp?

// for
for (var i = 0; i < 5; i++) {
    console.log(`for print i = ${i}`); // 0 1 2 3 4
}

// while
var m = 0;
while (m < 5) {
    m++;
    console.log(`while print m = ${m}`); // 1 2 3 4 5
}

//do while 
var n = 0;
do {
    n++;
    console.log(`do while print n = ${n}`); // 1 2 3 4 5
}
while (n < 5);

// for of 
function printArray() {
    var myArray = '';
    for (var param of arguments) {
        myArray += `${param} | `;
    }
    console.log(`for of print ${myArray}`);
}
printArray('HTML', 'CSS', 'JS'); // HTML | CSS | JS |

// for in 
var mentor = {
    name: 'Ngan',
    age: 20,
    major: 'He thong thong tin'
};
for (var key in mentor) {
    console.log(mentor[key]); // lấy value của object mentor: Ngan 20 He thong thong tin
}

var subject = [
    'Web Basic',
    'Game Basic',
    'Python'
];
for (var val in subject) {
    console.log(subject[val]); // lấy value của array subject: Web Basic Game Basic Python
}

// 2. Kết quả của đoạn code là gì? Giải thích
function f() {
    let b = 9
    return ++b < 10 ? b : 'Yah'
}
let a = f()
console.log(a)

/* 
hiển thị : Yah 
giải thích : 
toán tử tenary: condition ? valueIfTrue : valueIfFalse
b đang bằng 9, ++b nghĩa là cộng 1 đơn vị rồi gán ngược vào b -> lúc này b = 10
so sánh 10 < 10 -> sai -> nhận giá trị Yah
*/

// 3. 
var roman_unit = {
    1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X'
};
function convertToRoman(decimal_number) {
    for (var num in roman_unit) {
        if (num == decimal_number) {
            console.log(roman_unit[num]);
        }
    }
}
convertToRoman(9);

// 4. Email validator

var mailInput = [
    'Letters to the Editor (Your complete mailing address is required):',
    'letters@thehindu.co.in',
    'Readers\'\ Editor:',
    'readerseditor@thehindu.co.in',
    'Advertisements Queries (Print):',
    'inetads@thehindu.co.in',
    'Advertisements Queries (Online):',
    'digital@thehindu.co.in',
    'Advertisements Queries (International):',
    'international@thehindu.co.in',
    'Subscription Queries:',
    'subs@thehindu.co.in',
    'Comments on the website:',
    'web.thehindu@thehindu.co.in'
]
var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function mailValidate() {
    var mailOutput = [];
    mailInput.forEach((mailAddress) => {
        if (regex.test(mailAddress)) {
            mailOutput.push(`${mailAddress}`);
        }
    });
    return mailOutput.join(';\n');
}
console.log(mailValidate());

// 5 ---------------------------------------------------------------------
function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow")
            console.log("slow promise is done")
        }, 2000)
    })
}

function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast")
            console.log("fast promise is done")
        }, 1000)
    })
}

async function sequentialStart() {
    console.log('==SEQUENTIAL START==')
    const slow = await resolveAfter2Seconds()
    console.log(slow)
    const fast = await resolveAfter1Second()
    console.log(fast)
}

async function concurrentStart() {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds()
    const fast = resolveAfter1Second()
    console.log(await slow)
    console.log(await fast)
}

function concurrentPromise() {
    console.log('==CONCURRENT START with Promise.all==')
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0])
        console.log(messages[1])
    })
}

async function parallel() {
    console.log('==PARALLEL with await Promise.all==')
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))()
    ])
}

sequentialStart()
setTimeout(concurrentStart, 4000)
setTimeout(concurrentPromise, 7000)
setTimeout(parallel, 10000)

// 6----------------------------------------------------------------
let animals = ['cat', 'rabbit', 'dog', 'fox', 'fish', 'racoon', 'tiger', 'bear', 'parrot', 'snake'];

var numAnimal = 0;

function displayAnimal() {

    if (numAnimal < 10) {
        var contain = document.getElementById('container');
        
        var newAnimal = '<p> ' + animals[numAnimal] + '</p>';
        contain.insertAdjacentHTML('beforeend', newAnimal);
        
        numAnimal++;
    }
}

