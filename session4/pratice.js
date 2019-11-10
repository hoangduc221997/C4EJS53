let dictionary = {
    any: "anh người yêu",
    btw: "by the way",
    anw: "any way"
}

Object.keys(dictionary).forEach((v,i) => {
    console.log(`${i+1}. ${v}`)
})

let loop = true
while(loop){  
    let userInput = prompt("Nhập từ mà bạn muốn xem (Ân E để thoát chương trình)").toLowerCase()
    
    if(userInput in dictionary){
        console.log(dictionary[userInput])
    } else if(userInput === 'e'){
        loop = false
    } else {
        let userAnswer = prompt("Bạn muốn thêm từ này vào trong từ điển không y/n").toLowerCase()
        if(userAnswer === 'y'){
            let userInputValue = prompt("Hãy nhập ý nghĩa cho từ :D")
            dictionary[userInput] = userInputValue
            Object.keys(dictionary).forEach((v,i) => {
                console.log(`${i+1}. ${v}`)
            })
        } else if (userAnswer === 'n'){
            console.log("Cảm ơn bạn")
        } else {
            console.log("Bạn nhập sai rồi hihi")
        }
    }
}


// if('4' === 4){
//     console.log("hihi")
// }