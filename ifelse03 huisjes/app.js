class App {
    runApplication() {
        let random = Math.random();
        console.log(random)

        console.log("driehoek")
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "darkkhaki"
        g.lineTo(20, 30)
        g.lineTo(60, 40)
        g.lineTo(70, 20)
        g.lineTo(30, 10)
        g.lineTo(20, 30)
        g.stroke()
        g.fill()
        g.closePath()
        g.beginPath()
        g.fillStyle = "green"
        g.lineTo(20, 50)
        g.lineTo(60, 60)
        g.lineTo(60, 40)
        g.lineTo(20, 30)
        g.lineTo(20, 50)
        g.stroke()
        g.fill()
        g.closePath()
        g.beginPath()
        g.fillStyle = "yellow"
        g.lineTo(80, 50)
        g.lineTo(80, 30)
        g.lineTo(60, 40)
        g.lineTo(60, 60)
        g.lineTo(80, 50)
        g.stroke()
        g.fill()
        g.closePath()
        g.beginPath()
        g.fillStyle = "red"
        g.lineTo(70, 20)
        g.lineTo(60, 40)
        g.lineTo(80, 30)
        g.lineTo(70, 20)
        g.stroke()
        g.fill()
        g.closePath()
        if (random < 0.2) {
            g.fillStyle = "ff0000";
        } else {
            g.fillStyle = "white";
        }
        g.beginPath()
        g.moveTo(50, 50)
        g.lineTo(50, 45)
        g.lineTo(40, 42)
        g.lineTo(40, 48)
        g.stroke()
        g.fill()

        console.log(canvas)
    }
}

let app = new App();
app.runApplication();