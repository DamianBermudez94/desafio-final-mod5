export function loseComp(){
    class Loser extends HTMLElement {
        constructor() {
          super();
            this.render();
          
        }
        render(){
            const shadow = this.attachShadow({mode: 'open'});
            const div = document.createElement("div");
            div.innerHTML = `
                <img src="./perdiste.png"> 
            `
            shadow.appendChild(div);
        }
      }

      customElements.define("custom-loser", Loser);
}