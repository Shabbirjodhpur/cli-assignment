/*
    You are making a simple application in which user can select from a menu
    All the code for running and selecting menu is there here, 
    your job is to complete the functions given in utils.js
*/

const {loginUser,loginAdmin,addUser,removeUser,showUsers} = require("./utils.js")

const readlinesync = require("readline-sync")

let input = -1;

while (input != 0) {
    input = readlinesync.question(`

    ---------------------------------
    Enter a number and choose a option:
    0.Exit
    1.Login of user
    2.Login of admin
    3.Add users (only for admin)
    4.Remove users (only for admin)
    5.Show All users (only admin can see this)
    `)
    
    switch (input) {
        case "1":
            loginUser()
            break;
        case "2":
            loginAdmin()
            break;
        case "3":
            addUser()
            break;
        case "4":
            removeUser()
            break;
        case "5":
            showUsers()
            break;
        default:
            console.log('please enter a valid number')
    }
}