//Vòng lặp for
// for(let i = 0; i < 4; i++){
//     console.log("Hello")
// }

//Vòng lặp while

// let i = 0
// while(i < 10){
//     console.log(i)
//     i++
// }

let number = Number(prompt("Nhập số vào đi"));
let s = 0
for(let i = 0; i <= number; i++){
    s += i
}

console.log(`Tổng các số tự nhiên từ 0 - ${number} là: ${s}`)