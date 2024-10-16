let usersco=0;
let comptsco=0;


const userscorepara=document.querySelector("#Userscore");
const comptscorepara=document.querySelector("#computscore");


const choice=document.querySelectorAll(".course");


const msg=document.querySelector("#msg");

const gencomputscore = ()=>{
    const options = ["rock","paper","scissors"];
    const radidx=Math.floor(Math.random() * 3);
   
    return options[radidx];
};

const draw = ()=>{
    msg.innerText="Game was draw. Play again ";
    msg.style.backgroundColor="black" ;
 };

 const showwin=(userwin,userchoice,comptchoice)=>{
    if(userwin){
       usersco++;
       userscorepara.innerText=usersco;
      msg.innerText= `You win your ${userchoice} beats ${comptchoice}`;
      msg.style.backgroundColor="green" ;

    }
    else{
       comptsco++;
        comptscorepara.innerText=comptsco;
       msg.innerText=`You lost .${comptchoice} beats ${userchoice}`;
       msg.style.backgroundColor="red" ;
    }
};

const playGame = (userchoice)=>{
   const comptchoice=gencomputscore();
   if(userchoice === comptchoice){
    draw();

   }
   else {
       let userwin = true;
       if(userchoice === "rock"){
         userwin = comptchoice ==="paper" ? false : true;
       }
       else if(userchoice === "paper"){ 
        userwin = comptchoice === "scissors" ? false : true;
       }
        else {
        userwin = comptchoice === "rock" ? false : true;
        }
       showwin(userwin,userchoice,comptchoice);
   }

};


choice.forEach((course)=> {
    

    course.addEventListener("click",()=>{
    
      const userchoice=course.getAttribute("id");
         if(userchoice==null){
          userchoice.remove();
         }
        playGame(userchoice);
    });
    });
const but=document.querySelector("#but");
but.addEventListener("click",()=>{
  usersco=0;
  userscorepara.innerText=usersco;
  comptsco=0; 
  comptscorepara.innerText=comptsco;
  msg.innerText="play your game";
  msg.style.backgroundColor="black" ;
});