const imgFondo = require("url:../../../src/img/fondo.png");


export function initWelcome(params){
    const div = document.createElement("div");
    div.innerHTML = `
    <section class="section">
         <div class="container-title">
            <custom-text  variant="title">Piedra, Papel o Tijera</custom-text>
         </div>
         <div class="container-button">
            <button-componet class="button">Comenzar</button-componet>
         </div>
         <div class = "contenedor-elementos">
            <custom-tijera variant="small" class="elementos"></custom-tijera>
            <custom-piedra variant="small" class="elementos" ></custom-piedra>
            <custom-papel variant="small" class="elementos" ></custom-papel>
         </div>
    </section>
    `
    
    const style = document.createElement("style");
    style.innerHTML=`
         *{
          box-sizing: border-box;
         }
  
         .contenedor-elementos {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin: 0;
            padding: 0;
         }

       
  
         .container-title {
            width:50%
            margin:0;
            padding:15px;
           
         }

         .container-button {
            padding:25px 0;
         }
         .section{
            background-image:url(${imgFondo});
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin:0;
            padding:10px;
         }
         @media (min-width: 960px){
            .section{
               justify-content: space-around;
              
            }
            .contenedor-elementos{
               display: flex;
               flex-direction: row;
               align-items: flex-end;
            }
          
         }
        
  
    `
    div.appendChild(style);
   
    
   
    div.querySelector(".button").addEventListener("click",()=>{
        params.goTo("/instructiones");
    });
    
    return div;
    
    

}