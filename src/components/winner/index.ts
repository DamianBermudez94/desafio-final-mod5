export function winComp(){
    class Win extends HTMLElement {
        constructor() {
          super();
            this.render();
          
        }
        render(){
            const shadow = this.attachShadow({mode: 'open'});
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `
                <img class="img" src="./ganardor.png"> 
            `

            style.innerHTML = `
                .img{
                    width: 250px;
                    height: 250px;
                    padding:25px
                }
            `
            shadow.textContent = "ganaste";
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
      }

      customElements.define("custom-win", Win);
}