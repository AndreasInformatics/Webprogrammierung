
//abstrakte Klasse von der die anderen views, also home.js, lernplan.js etc. erben
export default class {
    constructor(params) {
        this.params = params;
    }

    //setzt Titel der Seite neu
    setTitle(title) {
        document.title = title;
    }

    //Speicherort für Html Code
    async getHtml() {
        return "";
    }
}