const data = require("./data.js")

function loginUser(){
    //take name and password from user
    // check from data that if name and password are correct
    // check if the name belongs to user
    // if everything above is correct - console.log("success") or else say console.log("some error occurred")
}

function loginAdmin(){
    //take name and password from user
    // check from data that if name and password are correct
    // check if the name belongs to admin
    // if everything above is correct - console.log("success") or else say console.log("some error occurred")
}

function addUser(){
    // take name1 and password1 from user and also name2 and password2 of new user that the client wants to add
    // Note: name1 and password1 will be taken from user to verify if he is admin or not (since this functionality is only meant for admins)
    // if everything above is correct add new user(name2,password2) to data - note: new user to be added will have isAdmin boolean to be false
    // if anything goes wrong console.log("error")
}

function removeUser(){
    // take name1 and password1 from user and also name2 of user that the client wants to remove
    // check from data that if name1 and password1 are correct and are of admin (since this functionality is only meant for admins)
    // if everything above is correct then remove user from data
    // if anything goes wrong console.log("error")
}

function showUsers(){
    // take name1 and password1 from user
    // check from data that if name1 and password1 are correct and are of admin (since this functionality is only meant for admins)
    // if everything above is correct show all users from data - but hide their passwords before showing them
    // if anything goes wrong console.log("error")
}

module.exports = {
    loginUser,
    loginAdmin,
    addUser,
    removeUser,
    showUsers
}