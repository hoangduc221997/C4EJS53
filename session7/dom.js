const buttonAdd = document.getElementById("add")
const buttonRemove = document.getElementById("remove")
const userInput = document.getElementById("user-input")
const usersList = document.getElementById("users-list")




buttonAdd.addEventListener('click', () => {

    let value = userInput.value
    if(value == ""){
        alert("Enter something")
    } else {
       let liElement = document.createElement('li')
       liElement.innerText = value
       usersList.append(liElement)
    //    console.log(liElement)
       userInput.value = ""
    }
    // console.log(value)
})

buttonRemove.addEventListener('click', () => {
    // console.dir(usersList)
    let value =  userInput.value
    if(value == ""){
        usersList.removeChild(usersList.lastElementChild)
    } else {
        let invalid = true
        for(let i = 0; i < usersList.children.length; i ++){
            if(value.toLowerCase() == usersList.children[i].textContent.toLowerCase()){
                usersList.removeChild(usersList.children[i])
                invalid = false
                userInput.value = ""
            }
        }
        if(invalid) {
            alert("Nhập sai rồi")
        }
    }
})











// console.dir(buttonSubmit)
// text.innerHTML = "hi"
// input
// console.dir(userInput.value)
// userInput.addEventListener('keyup', () => {
//     console.dir(userInput)
// })

// buttonAdd.addEventListener('click', () => {
//     // let liElement  = `<li> ${userInput.value} </li>`
//     if(userInput.value != ""){
//         let newLiEmenent = document.createElement('li')
//         newLiEmenent.textContent = userInput.value
//         usersList.appendChild(newLiEmenent)
//         userInput.value = ""
//     } else {
//         alert("Please enter the input")
//     }
    
// })
// console.dir(usersList)
// buttonRemove.addEventListener('click', () => {
//     // console.dir(usersList)
//     if(userInput.value == ""){
//         usersList.removeChild(usersList.lastElementChild) 
//     } else {
//         let check = true
//        for(let i = 0; i < usersList.children.length; i++){
//             console.log(usersList.children[i].textContent.toLowerCase())
//             console.log(userInput.value.toLowerCase())
//             if(userInput.value.toLowerCase() === usersList.children[i].textContent.toLowerCase()){
//                 usersList.removeChild(usersList.children[i])
//                 userInput.value = ""
//                 check = false
//             }
//         }
//         if(check){
//             alert("Invalid")
//         }
//         // alert("Invalid")
//     }
   
// })