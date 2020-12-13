import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Unsere Übungen");
        //Ändert Titel bei Aufruf der Seite
    }

    //Überschrift 
    //3er Tabelle mit je Reihe Überschrift + Text + Download Link
    async getHtml() {
        return `
    <br>
    <div class="headline">
        <h1>Mathe Übungen</h1>
    </div>
    <div class="container tabelle">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h3 class="tabelle-titel">Algebra</h3>
                <p>Unter Algebra versteht man das Lösen von Gleichungen. Dabei spielen Rechenoperationen eine entscheidende Rolle. Aber nicht nur Gleichungen spielen eine Rolle. Auch Polynome, Terme und Geraden gehören beispielsweise zur Algebra. Unten findest du einen Download-Link zu verschiedenen Algebra Übungen. Neben Grundlagen werden auch fortschrittliche Übungen geboten.</p>
                <a href="/static/docs/Algebra.docx" class="linked" download="Algebra-Übungen">
                    <p class="downloadtext">Stochastik-Übungen Download</p>
                </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h3 class="tabelle-titel">Analysis</h3>
                <p>Die Analysis beschäftigt sich mit den Eigenschaften von Funktionen. Für die normale Schule reichen Aufgaben zur Untersuchung von Funktionen, sowie normale Kurvendiskussion. Das heißt Nullstellen berechnen beispielsweise. Für die Universität sind auch komplexere Themen wichtig wie Konvergenz und Stetigkeit. Auch zu den schwierigeren Themen sind im Download einige Übungen vorgesehen.</p>
                <a href="/static/docs/Analysis.docx" class="linked" download="Analysis-Übungen">
                    <p class="downloadtext">Stochastik-Übungen Download</p>
                </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">  
                <h3 class="tabelle-titel">Stochastik</h3>
                <p>Stochastik beschäftigt sich mit der Wahrscheinlichkeit. Genauer gesagt wie wahrscheinlich ist es, dass ein zufälliges Ereigniss eintritt. Mittels Graphiken oder Tabellen werden die jeweiligen Ergebnisse anschließend ausgewertet. In den Übungen befinden sich nicht nur Übungen zu Baumdiagramen und Binominalverteiilung, sondern auch zur Kombinatorik und Normalverteilung.</p>
                <a href="/static/docs/Stochastik.docx" class="linked" download="Stochastik-Übungen">
                    <p class="downloadtext">Stochastik-Übungen Download</p>
                </a>
            </div>
        </div> 
    </div>
        `;
    }
}