import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Unser Taschenrechner");
        //Ändert Titel bei Aufruf der Seite
    }

    //Inhalt von der Home Seite
    //Überschrift
    //Karousel + Anzeige von Aktueller Folie + Icons zum verändern der Folien
    //Taschenrechner + Display
    //Überschrift Regeln + Text
    async getHtml() {
        return `
        <body>
            <br>
            <div class="headline">
                <h1>Der Taschenrechner für die Profis</h1>
            </div>
            <br>
            <div id = "myCarousel" class = "carousel slide text-center" data-interval="3500" data-ride = "carousel">
                <ol class = "carousel-indicators">
                    <li data-target = "#myCarousel" data-slide-to = "0" class="active"></li>
                    <li data-target = "#myCarousel" data-slide-to = "1"></li>
                    <li data-target = "#myCarousel" data-slide-to = "2"></li>
                </ol>
            
                <div class = "carousel-inner" role = "listbox">
                    <div class = "carousel-item active">
                        <h4>"Der Rechner ist der absolute Hammer. Selbst komplizierte Rechnungen funktionieren einwandfrei."<br><span>Arne Born, 52, Lehrer</span></h4>
                    </div>
                    <div class = "carousel-item">
                        <h4>"Ich bin sehr erstaunt was dieser kleine unscheinbare Rechner alles kann!"<br><span>Elisabeth Schmidt, 22, Studentin</span></h4>
                    </div>
                    <div class = "carousel-item">
                        <h4>"Hier wird meinem Sohn endlich weitergeholfen. Die Lernpläne sind perfekt für ihn zugeschnitten."<br><span>Mark Rössler, 33, Manager</span></h4>
                    </div>
                </div>

                <a class = "carousel-control-prev" href = "#myCarousel" role = "button" data-slide = "prev">
                    <span class="fa fa-angle-left fa-lg fontIcon" aria-hidden="true"></span>
                    <span class = "sr-only">Previous</span>
                </a>
                <a class = "carousel-control-next" href="#myCarousel" role = "button" data-slide = "next">
                    <span class="fa fa-angle-right fa-lg fontIcon" aria-hidden="true"></span>
                    <span class = "sr-only">Next</span>
                </a>
            </div>
            <br>
        
            <div id="taschenrechner">
                <div id="display">
                    <div class="inner">
                        <output id="betrag">0</output>
                    </div>
                </div>
                <div id="ziffern">
                        <table>
                        <tr>
                            <td><button onclick="buildNumber(1)" class="button">1</button></td>
                            <td><button onclick="buildNumber(2)" class="button">2</button></td>
                            <td><button onclick="buildNumber(3)" class="button">3</button></td>
                            <td class="leerzeile"></td>
                            <td><button onclick="buildNumber('+')" class="button funk-plus" >+</button></td>
                            <td><button onclick="buildNumber('-')" class="button funk-minus">-</button></td>
                            <td><button onclick="buildNumber('÷')" class="button funk-durch">÷</button></td>
                            <td><button onclick="buildNumber('×')" class="button funk-mal">×</button></td>
                        </tr>
                        <tr>
                            <td><button onclick="buildNumber(4)" class="button">4</button></td>
                            <td><button onclick="buildNumber(5)" class="button">5</button></td>
                            <td><button onclick="buildNumber(6)" class="button">6</button></td>
                            <td class="leerzeile"></td>
                            <td><button onclick="buildNumber('√x')" class="button funk-wurzel">√x</button></td>
                            <td><button onclick="buildNumber('!')" class="button funk-fakultat">n!</button></td>
                            <td><button onclick="buildNumber('π')" class="button funk-pi">&pi;</button></td>
                            <td><button onclick="buildNumber('e')" class="button funk-e">e</button></td>
                        </tr>
                        <tr>
                            <td><button onclick="buildNumber(7)" class="button">7</button></td>
                            <td><button onclick="buildNumber(8)" class="button">8</button></td>
                            <td><button onclick="buildNumber(9)" class="button">9</button></td>
                            <td class="leerzeile"></td>
                            <td><button onclick="buildNumber('²')" class="button funk-quadrat">x&sup2;</button></td>
                            <td><button onclick="buildNumber('log')" class="button funk-logarithmus">log</button></td>
                            <td><button onclick="buildNumber('(')" class="button funk-klammer-links">(</button></td>
                            <td><button onclick="buildNumber(')')" class="button funk-klammer-rechts">)</button></td>
                        </tr>
                        <tr>
                            <td><button onclick="buildNumber('.')" class="button">.</button></td>
                            <td><button onclick="buildNumber(0)" class="button">0</button></td>
                            <td><button onclick="buildNumber('=')" class="button">=</button></td>
                            <td class="leerzeile"></td>
                            <td><button onclick="buildNumber('C')" class="button funk-delete-all">C</button></td>
                            <td><button onclick="buildNumber('⌫')" class="button funk-delete-last">&#9003;</button></td>
                        </tr>
                    </table>
                </div>
            </div>
            <br>
            
            <div class="headlineRules">
                <h3>Achtung! Regeln für den Taschenrechner:</h3>
            </div>
            <div class ="ruleText">
                <p>- Bei Sonderrechnungen wie: √x, n!, log oder x&sup2; muss zuerst die Zahl eingegeben werden und dann die Sonderrechnungs-Zeichen.</p>
                <p>- In Version 1.0.0 dürfen nicht mehrere Klammern in einer anderen Klammer verschachtelt sein. Eine Klammer muss geöffnet und wieder geschlossen werden, bevor eine neue Klammer geöffnet werden kann.</p>
                <p>- Mehrere Sonderzeichen hintereinander führen zu keinem sinnvollen Ergebnis. Um zwei Sonderzeichen hintereinander zu benutzen müssen Klammern verwendet werden.</p>
            </div>
            <br>
        </body>
        `;
    }
}