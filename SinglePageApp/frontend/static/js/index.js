import Home from "./views/home.js";
import Lernplan from "./views/lernplan.js";
import Übungen from "./views/uebungen.js"

//History Api um auf vergangene url zurückzugreifen
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

//Verweist auf Imports, gibt an wie sich url verändern soll 
const router = async () => {
    const routes = [
        { path: "/home", view: Home},
        { path: "/lernplan", view: Lernplan},
        { path: "/uebungen", view: Übungen},
    ];

    //obige verschiedene Pfade werden mit dem aktuellen Pfad gematcht
    const potentialMatches = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    //speichert ab welcher Pfad gematcht wurde
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    //wenn kein match zustande kam, wird /home als default gesetzt
    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    //neue Instanz auf die aktuell angeschaute Seite für die HTML Seite (index.html)
    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
};

//Damit die History Funktion bei der URl verwendet werden kann (zurück/vor)
window.addEventListener("popstate", router);

//Wenn auf die verschiedenen Kapitel in der Navbar geklickt wird, wird eine Verbindung zu der Seite hergestellt ohne refresh
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});


