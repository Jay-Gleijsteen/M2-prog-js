class App
{
    runApplication()
    {
        //code gaat hier
      this.appNaam = "luigi"
         this.versienummer = "0,328"
         this.versiedatum  = "oktober 5"
         this.autheur = "J.K rowling"
         this.copyright = "snollebolekkes"
         this.distributeur = "spongebob"
         this.darkmode = "true"
    }
}

let app = new App();
app.runApplication();

console.log(app.greeting);
console.log("appNaam: " + app.appNaam);
console.log("versienummer: " + app.versienummer);
console.log("versiedatum: " + app.versiedatum);
console.log("autheur: " + app.autheur);
console.log("copyright: " + app.copyright);
console.log("distributer: " + app.distributer);
console.log("darkmode: " + app.darkmode);
