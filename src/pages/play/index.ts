import { state } from "../../state";
const fondo = require("url:../../../src/img/fondo.png");

export function initPlay(params){
    const div = document.createElement("div");
    div.innerHTML= `
        <section class="section">
            <div class="container-contador">
                <contador-comp class ="contador"></contador-comp>
            </div>
            <div class="container">
                <custom-tijera id = "pointer" class="elementos"></custom-tijera>
                <custom-piedra id = "pointer" class="elementos"></custom-piedra>
                <custom-papel id = "pointer" class="elementos"></custom-papel>
            </div>
        </section>
        
    `
    const style = document.createElement("style");
    style.innerHTML= `
        *{
         box-sizing: border-box;
        }
        body {
         margin: 0;
        }
        .section {
            background-image:url(${fondo});
            height:100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin:0;
            padding:30px;
         
        }
        @media(min-width:960px){
            .section{
                padding:20px;
                height: 100vh;
            }
        }
        .container-contador{
            min-height: 200px;
        }
  
        .container {
            
            min-width: 370px;
            min-height: 200px;
            justify-content: space-around;
            display: flex;
            flex-direction: row;
            align-items: flex end;
         }
      
    
    `
    console.log("dsafasdfasd",state.getScore);
    const pointEl = div.querySelectorAll("#pointer");
    let contador:any = div.querySelector(".contador");
    let boolean = false;
    
    pointEl.forEach(element =>{
        element.addEventListener("change", (e:any)=>{
            boolean = true;
            const evento = new CustomEvent("change", {detail:{
            myPlay: e.detail.myPlay
            
            
        }})
    
        
        state.setMove(e.detail.myPlay);
       
        
        params.goTo("/results");
        })
    })
    contador.addEventListener("change", (e:any)=>{
      
        if(boolean == false){
            params.goTo("/welcome")
        }
        
    })
    div.appendChild(style);
    return div;


    
}