let user = prompt("enter anyone from stone, paper and scissoers");
let com = Math.floor(Math.random()*3)
let computer = ["stone","paper","scissoers"][com]

const match = (computer,user) => {
    if (computer == user) {
        return "tie"
    }
   
    else if(computer === "stone" && user === "paper") {
        return "user"
    }
    else if(computer === "stone" && user === "scissoers") {
        return "computer"
    }
    else if(computer === "paper" && user === "scissoers") {
        return "user"
    }
    else if(computer === "paper" && user === "stone") {
        return "computer"
    }
    else if(computer === "scissoers" && user === "paper") {
        return "computer"
    }
    else if(computer === "scissoers" && user === "stone") {
        return "user"
    }
}

let result = match(computer,user)
document.write(`COMPUTER=${computer} <br><br> USER=${user} <br><br> THE WINNER IS=${result}`);