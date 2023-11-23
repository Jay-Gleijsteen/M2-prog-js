class App
{
    runApplication()
    {
        //code gaat hier
        this.greeting = "welkom"
      this.appNaam = "luigi"
         this.versienummer = "0,328"
         this.versiedatum  = "oktober 5"
         this.autheur = "J.K rowling"
         this.copyright = "snollebolekkes"
         this.distributer = "spongebob"
         this.darkmode = "true"

         let classboolean = false
         let classstring = "kip"
         let classnumber = 55

         console.log(app.greeting);
         console.log(classboolean);
         console.log(classstring);
         console.log(classnumber);

         this.localboolean = true
         this.localstring = "haan"
         this.localnumber = 110
    }
}

let app = new App();
app.runApplication();

console.log("appNaam: " + app.appNaam);
console.log("versienummer: " + app.versienummer);
console.log("versiedatum: " + app.versiedatum);
console.log("autheur: " + app.autheur);
console.log("copyright: " + app.copyright);
console.log("distributer: " + app.distributer);
console.log("darkmode: " + app.darkmode);
console.log(app.localboolean);
console.log(app.localstring);
console.log(app.localnumber);
