class App
{
    runApplication()
    {
        console.log("hello world!")
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "darkkhaki"
        g.moveTo(20, 20)
        g.lineTo(300, 300)
        g.lineTo(580, 20)
        g.stroke()
        g.fill()
        g.closePath()
    }
}

let app = new App();
app.runApplication();