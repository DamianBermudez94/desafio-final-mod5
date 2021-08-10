const imgFondo = require("url:../../../src/img/fondo.png");
export function initInstruscciones(params){
    const div = document.createElement("div");
    div.innerHTML = `
        <section class = "section">
            <div class="container-title">
                <custom-text variant="body">Presioná jugar
                y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>
            </div>
            <div class="container-button">
                <button-componet class="button">¡Jugar!</button-componet>
            </div>
            <div class="contenedor-elementos">
                <custom-tijera class="elementos"></custom-tijera>
                <custom-piedra class="elementos"></custom-piedra>
                <custom-papel class="elementos"></custom-papel>
            </div>
        </section>
    `
    const style = document.createElement("style");
    style.innerHTML = `
        * {
            box-sizing: border-box;
        }
        
        .container-title {
        
            font-size: 40px;
            font-weight: bold;
            margin:0;
            padding: 30px;
            text-align: center;
            font-family: 'Odibee Sans', cursive;
        }

        .container-button {
            font-size: 40px;
            padding: 50px;
         
        }
       
        .contenedor-elementos {
            display: flex;
            flex-direction: row;
           
            margin: 0;
            
          
        }

        @media (min-width:960px){
            .contenedor-elementos{
                display: flex;
                flex-direction: row;
                align-items: flex-end;
            }
            container-title {
                width:50%;
            }
            
         }
  
       
        
       
        .section{
            height: 100%;
            background-image:url(${imgFondo});
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin:0;
            padding:10px;
        }
        @media (min-width:960px){
            .section{
                height: 100vh;
              justify-content: space-around;
            }
        }
  
    
    `
    div.appendChild(style);
    div.querySelector(".button").addEventListener("click",()=>{
        params.goTo("/play");
    })
    return div;
}