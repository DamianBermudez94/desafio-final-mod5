const papel= require("url:../../../src/img/papel.png")
console.log("soy la imagen",papel);

export function papelComp(){
    class Papel extends HTMLElement {
        constructor() {
          super();
            this.render();
          
        }
        render(){
            const variant = this.getAttribute("variant") || "small"
            const shadow = this.attachShadow({mode: 'open'});
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `
                <img variant="big" class="papel" src="${papel}"> 
            `
            style.innerHTML = `
            .big{
                width: 150px;
                height: 300px;
              

            }
            .small{
                width: 90px;
                height: 100px;
              
            }
            
            
            `
            const elegido = div.querySelector(".papel");
            elegido.addEventListener("click", (r)=>{
                const evento = new CustomEvent("change",{detail:
                {
                    myPlay:"papel"
                }
            })
                this.dispatchEvent(evento);
            })
            
            div.className = variant;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
      }

      customElements.define("custom-papel", Papel);
}