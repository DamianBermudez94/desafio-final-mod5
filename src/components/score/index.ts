import { state } from "../../state";
export function scoreComp(){
    class Score extends HTMLElement {
        constructor() {
          super();
            this.render();
          
        }
        render(){
            const shadow = this.attachShadow({mode: 'open'});
            const div = document.createElement("div");
            const style= document.createElement("style");
            const score = state.getScore();
            
            div.innerHTML = `
                <div class="container">
                    <h3 class="title">Score</h3>
                    <custom-text class="text" variant="body">Vos: ${score.myScore}</custom-text>
                    <custom-text class="text" variant="body">Maquina: ${score.computerScore}</custom-text>
                </div> 
            `

            style.innerHTML = `
                .container{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                 
                    border:5px solid #000; 
                    border-radius: 10px;
                    background-color:#fff;
                    width: 200px;
                    height: 200px;
                }
                .title{
                    text-align: center;
                    font-size:40px;
                    font-weight: 700;
                    color:#000;
                    font-family: 'Odibee Sans', cursive;
                    margin:0;
                }
                .text{
                    font-size:30px;
                    color:#000;
                    font-family: 'Odibee Sans', cursive;
                    text-align: right;
                    padding: 0;

                }
            `
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
      }

      customElements.define("custom-score", Score);
}