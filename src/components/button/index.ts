export function button(){
    class Button extends HTMLElement {
        constructor() {    
          super();
          this.render();
        }
        
        render(){
            const shadow = this.attachShadow({mode: 'open'});
            const button = document.createElement("button");
            const style = document.createElement("style");
            button.className = "root";

            style.innerHTML = `
                .root{
                    
                    background-color: #006CFC;
                    color:#fff;
                    font-size:45px;
                    border: solid 4px blue;
                    border-radius: 4px;
                    margin:0;
                    padding:25px;
                    font-family: 'Odibee Sans', cursive;
                    
                }
            `
            button.textContent= this.textContent;
            shadow.appendChild(button);
            shadow.appendChild(style);

        }
    }
    customElements.define("button-componet", Button);

}