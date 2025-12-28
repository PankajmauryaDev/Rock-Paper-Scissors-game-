let useScore = 0;
let comScore = 0;

const choises = document.querySelectorAll(".choise");

const gencomChoise = () => {
    const opt = ["Rock","Paper","Scisser"];
    const idx = Math.floor(Math.random() * 3);
    return opt[idx];
}

let msg = document.querySelector("#msg");

const user_score_para = document.querySelector("#user-score");
const com_score_para = document.querySelector("#com-score");


const playground = (userChoise) => {
    console.log("user Choise : ",userChoise);

    // computer choise
    const comChoise =gencomChoise();
    console.log("computer choise : ",comChoise);

    // Game Rule.
    if(userChoise === comChoise){
        console.log("You both choise is same game drow");
        msg.innerText="both are chosse ";    
        msg.style.backgroundColor = "black";
        
    }
    else if((userChoise === "Rock" && comChoise === "Scissors") ||
        (userChoise === "Paper" && comChoise === "Rock") ||
        (userChoise === "Scissors" && comChoise === "Paper")
    ){
        useScore++;
        console.log("user win");   
        msg.style.backgroundColor = "Green";
        msg.innerText=`you win ${userChoise} beat ${comChoise}`;  
        user_score_para.innerText = useScore;
        // console.log("user choise : ",userChoise);
        // console.log("com-choise : ",comChoise);

    }else{
        comScore++;
        console.log("Computer win");
        msg.style.backgroundColor = "red";
        msg.innerText = `you loose ! ${comChoise} beat ${userChoise}`;
        // msg.innerText="both are chosse ",userChoise , comChoise;
        com_score_para.innerText = `${comScore}`;

    }
}


choises.forEach( (choise) => {
    choise.addEventListener("click" , () => {
       const userChoise = choise.getAttribute("id");
        playground(userChoise);
    })
})







