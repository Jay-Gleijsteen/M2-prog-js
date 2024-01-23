class App
{
    runApplication()
    {
        let uiButton = document.getElementById('clickable');
        let klik = document.getElementById('klikopme');
        let foto = document.getElementById('fotoclick');
        let tekst = document.getElementById('tekst');


        tekst.addEventListener("click",(e)=>
        {   
            const curColour = document.body.style.backgroundColor;

            if (curColour === 'red') {
                document.body.style.backgroundColor = "white";
            }
            else {
                document.body.style.backgroundColor = "red";
            }
        })
        uiButton.addEventListener("click",(e)=>
        {
            const para = document.createElement("p");
            const node = document.createTextNode("voet");

            para.appendChild(node);
            document.body.appendChild(para)
        })
        klik.addEventListener("click",(e)=>
        {
            const grote = document.createElement("h1")
            const tekstGrote = document.createTextNode("Dit ben voet");

            grote.appendChild(tekstGrote);
            document.body.appendChild(grote)
        })
        foto.addEventListener("click",(e)=>
        {
            var x = document.createElement("IMG");
            x.setAttribute("src", "Foot_on_white_background.jpg");
            x.setAttribute("width", "304");
            x.setAttribute("height", "228");
            x.setAttribute("alt", "The Pulpit Rock");
            document.body.appendChild(x);
        })
    }
}

let app = new App();
app.runApplication();