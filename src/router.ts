import { initWelcome} from "./pages/welcome";
import { initInstruscciones } from "./pages/instrucciones";
import { initPlay } from "./pages/play";
import { initResultadoWinner } from "./pages/resultado-winner";
import { initResultadosLoser } from "./pages/resultado-loser";
const routes = [
    {
        path: /\/welcome/,
        component: initWelcome,
    },
    {
        path: /\/instructiones/,
        component: initInstruscciones,
    },
    {
        path: /\/play/,
        component: initPlay,
    },
    {
        path: /\/results/,
        component: initResultadoWinner,
    },
    {
        path: /\/resultados-loser/,
        component: initResultadosLoser,
    },
 
    
];
export function initRouter(container: Element) {
    function goTo(path){
       
        
        history.pushState({}, "", path);
        handleRoute(path);
    }
     function handleRoute(route) {
        console.log("el handle recibio una nueva ruta", route);

        for (const r of routes) {
           
            
            if (r.path.test(route)) {
                const el = r.component({goTo:goTo});
                
                if (container.firstChild) {
                    container.firstChild.remove();
                }
                container.appendChild(el);
                
            }
            
        }
    
    }
    handleRoute(location.pathname.replace("/desafio-modulo-5", "/welcome"));
    if(location.pathname){
        goTo("/welcome");
        
        
    }
    
    window.onpopstate = function(){
        handleRoute(location.pathname);
    }
}