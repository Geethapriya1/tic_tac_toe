console.log("Welcome to tic tac toe")
let music=new Audio()
let audioTurn=new Audio()
let music=new Audio()
let turn="X"

const changeTurn=()=>{
    document.getElementsByClassName(turn)[0].innerText="Turn for"+
    return turn==="X"?"0":"X"
}

const checkWin=()=>{

}

let boxes=document.getElementsByClassName("Box")
Array.from(boxes).forEach(Element=>{
    let boxtext=document.querySelector('.boxtext');
    boxtext.addEventListener('click',()=>{
        if(e.innerText===''){
            e.innerText=turn;
            changeTurn();
            audioTurn.play();
            checkWin();

        }
    })

})