let h4=document.querySelector('h4');
let gameStarted=false;
let level=0;
let btns=['green','yellow','red','blue'];
let gameSqe=[];
let userSqe=[];
let body=document.querySelector('body');
let precent=document.querySelector('#precent');
let highScr=0;

document.addEventListener('keypress',function(){
    if(gameStarted==false){
        h4.innerText='Game started';
        gameStarted=true;
        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(()=>btn.classList.remove('flash'),200);
}
function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(()=>btn.classList.remove('userflash'),200);
}
function levelUp(){
    userSqe=[];
    setTimeout(()=>h4.innerText=`Level ${++level}`,500);
    let randInd=Math.floor(Math.random()*4);
    let randColor=btns[randInd];
    let randbtn=document.querySelector(`.${randColor}`);
    let btnid=document.querySelector(`#${randColor}`);
    btnflash(randbtn);
    let x=randbtn.getAttribute('id');
    gameSqe.push(x);
    console.log('gamesqe= ',gameSqe);
}



function btnpress(){
    userflash(this);
    userSqe.push(this.getAttribute('id'));
    console.log('usersqe= ',userSqe);
    check(userSqe.length-1);
}

let Allbtns=document.querySelectorAll('.btn')
for (i of Allbtns){
    i.addEventListener('click',btnpress);
}

function check(x){
    if(gameSqe[x]==userSqe[x]){
        if(gameSqe.length==userSqe.length){
            setTimeout(() => {
                levelUp();
            }, 500);
        }
    }else{
        getHighscr(level);
        body.classList.add('body');
        setTimeout(() => body.classList.remove('body'), 250);
        h4.innerText=`Game Over! You reached Level ${level} \n Press any key to start again`;
        gameStarted=false;
        userSqe=[];
        gameSqe=[];
        level=0;
    }
}

function getHighscr(score){
    if(score>highScr){
        highScr=score;
        precent.innerText=`Your highest score: ${highScr}`;
    }
}

