import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Unsere Lernpläne");
        //Ändert Titel bei Aufruf der Seite
    }

    //Overlay + beim Hovern Überschrift Anzeigen
    //Bild + Text
    //Lernplan Formular mit voreingetragenem Text
    //Absenden Button
    //Bild wie oben zur Abrundung
    async getHtml() {
        return `
        <div class="overlay">
			<img src="/static/pictures/overlay.PNG" alt="Avatar" class="picture" style="width:100%; height:100px">
			<div class="mid">
				<div class="insidetext">Lernpläne anfordern</div>
            </div>
		</div>
        <div class="container tabelle">
			<div class="row">
				<div class="col-lg-4 col-md-4 col-sm-12">
					<h3 class="tabelle-titel">Zeitmanagement</h3>
					<img src="/static/pictures/zeitmanagement.jpg" class="img-fluid">
					<p>Zeitmanagement ist bei einem Lernplan ein Fokus-Thema. Eine der wichtigsten Fragen ist dabei, wieviel Zeit einem bis zur Lernkontrolle bleiben. Je nachdem müssen die Lerneinheiten dann gegebenenfalls intensiviert werden. Generell sollte man sich auch die Frage stellen wieviel Zeit man tatsächlich investieren will bzw. sich überhaupt konzentrieren kann.</p>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-12">
					<h3 class="tabelle-titel">Thematiken</h3>
					<img src="/static/pictures/themen1.jpg" class="img-fluid">
					<p>Gleichzeitig sollte man auch ein Auge auf die Thematiken werfen, die man Lernen möchte. Vor allem beim Studium sollten starke Grenzen gesetzt werden. Häufig sind die Thematiken zu breit gefächert, sodass man versuchen sollte nur die wichtigsten Aspekte zu lernen. Achte dabei darauf ob du gewisse Thematiken vielleicht in der Zukunft noch brauchen könntest.</p>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-12">        
					<h3 class="tabelle-titel">Lernplan beantragen</h3>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Name" name="">
					</div>
					<div class="form-group">
						<input type="email" class="form-control" placeholder="Email-Adresse" name="email">
					</div>
					<div class="form-group">
						<textarea class="form-control" rows="4" placeholder="Themen, Zeit bzw. Stunden und andere Wünsche beschreiben"></textarea>
					</div>
					<input type="submit" class="btn btn-secondary btn-block btn-warning" value="Senden" name="">
				</div>
			</div> 
        </div>
        <img src="/static/pictures/overlay.PNG" alt="Avatar" class="picture" style="width:100%; height:100px">
        `;
    }
}