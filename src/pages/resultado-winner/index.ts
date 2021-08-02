import { state } from "../../state";
const ganaste = require("url:../../../src/img/ganador.png");
const perdiste = require("url:../../../src/img/perdiste.png");
const empate = require("url:../../../src/img/empate.png");
const fondo = require ("url:../../../src/img/fondo.png");

export function initResultadoWinner(params){
    const div = document.createElement("div");
    const style = document.createElement("style");
    const lastState = state.getState();
     const myState =  lastState.currentGame.myPlay;
     const computerState = lastState.currentGame.computerPlay;
     const myPlay = document.createElement("div");
     const computerPlay = document.createElement("div");
     if(myState == "piedra" )
         myPlay.innerHTML = `
         <custom-piedra variant= "big" class= "my-play"></custom-piedra>
         `
     if(myState == "papel")
         myPlay.innerHTML = `
         <custom-papel variant="big" class= "my-play"></custom-papel>
         `
    
    if(myState == "tijera")
         myPlay.innerHTML = `
        <custom-tijera variant="big" class="my-play"></custom-tijera>
        `
    if(computerState == "piedra")
        computerPlay.innerHTML = `
        <custom-piedra variant= "big" class= "computer-play"></custom-piedra>
        `
    if(computerState == "papel")
        computerPlay.innerHTML = `
        <custom-papel variant= "big" class= "computer-play"></custom-papel>
        `
    if(computerState == "tijera")
        computerPlay.innerHTML =`
        <custom-tijera variant= "big" class= "computer-play"></custom-tijera>
        `
     
    
    div.innerHTML = `
        <div class = "container-all">
            <div class="my-play"></div>
            <div class="computer-play"></div>
            <section class= "section">
                <img class="imagen" src = "${ganaste}"></img>
                <custom-score ></custom-score>
                <div class= "container-button">
                    <button-componet class="button">Volver A Jugar</button-componet>
                </div>
            </section>
        </div>
    `

    style.innerHTML = `
        *{
            box-sizing:border-box;
        }
        body{
            margin:0;
        }
        
        .section{
            height:720px;
            background-image:url(${fondo});
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            top: 0px;
            bottom: 0px;
            right: 0px;
            left: 0px;
        }
        
        .imagen{
            width:200px;
            height:200px;
        }
       
        .container-button{
            padding: 20px;
           
        }
      
        .container-all{
            background-image:url(${fondo});
            display:flex;
            flex-direction: column-reverse;
            min-height:100vh;
            justify-content: space-between;
            align-items: center;
        }
        .my-play{
         
            min-width: 157px;
            min-height: 300px;
            
        }
        .computer-play{
            transform: rotate(180deg);
            min-width: 157px;
            min-height: 300px;
           
        }
        @media (min-width: 960px){

            .container-all{
               
                height:100vh;
               
            }

            .my-play{
             
                min-width: 200px;
                min-height: 500px;
                margin-right: 500px;
                position: absolute;
                top: 50px;
             
                
            }
            .computer-play{
                min-width: 200px;
                min-height: 500px;
                margin-left: 500px;
               
            }
        }
      
        
    `

    const intevarlo = setInterval(()=> 1000);
    const section:any = div.querySelector(".section");
    const imagen:any = div.querySelector(".imagen");
    const jugadas = div.querySelector("container-all");
    const sectionLose:any = div.querySelector(".section-2");
    

    setTimeout(()=>{
        clearInterval(intevarlo)
        if(state.whoWins(state.getState().currentGame.myPlay,state.getState().currentGame.computerPlay)=="ganaste")
        {
            
            section.style.background = "rgba(136, 137, 73, 0.9)";
            section.style.padding="20px";
            imagen.src = ganaste;
            
            
            
        }
        if((state.whoWins(state.getState().currentGame.myPlay,state.getState().currentGame.computerPlay)=="perdiste"))
        {
           
            section.style.background = "rgba(137, 73, 73, 0.9)";
            section.style.padding="20px";
            imagen.src = perdiste;
            
        
        }
        if((state.whoWins(state.getState().currentGame.myPlay,state.getState().currentGame.computerPlay)=="empataste"))
        {
           
            section.style.background = "rgba(235, 223, 0, 0.7)";
            section.style.padding="20px";
            imagen.src = empate;
        }
    },1000);

    div.querySelector(".computer-play").appendChild(computerPlay);
    div.querySelector(".my-play").appendChild(myPlay);
    div.appendChild(style);
    div.querySelector(".button").addEventListener("click",()=>{
        params.goTo("/instructiones");
    })
    return div;
}