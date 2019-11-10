
// let loop = true
// while(loop){

//     let temp = Number(prompt("XIn cái nhiệt độ nào"));
//     if(temp <10){
//         console.log("Lạnh quá")
//     } else if(temp < 25) {
//         console.log("Mát quá")
//     } else {
//         console.log("Nóng quá")
//     }

//     if(temp > 50){
      
//         loop = false
//         console.log("hihi")
       
//     }
// }

let loop = true
let count = 0

while(loop){
    let username = prompt("Nhập username bạn ơi");
    if(username === "c4e54"){
        console.log("Nhập đúng username rồi ahihi")
        let password = prompt("Nhập vào password đê bạn ơi")
        if(password === "codethechange"){
            alert("Bạn đăng nhập đúng rồi đó bitch")
            break
        } else {
            count +=1
            alert("Đăng nhập sai rồi đồ khốn")
        }
    } else {
        console.log("Nhập sai rồi bạn ơi, nhập lại đê")
        count += 1
    }

    if (count == 3){
        loop = false
    }
}