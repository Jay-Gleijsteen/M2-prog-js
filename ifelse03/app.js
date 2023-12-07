class App
{

    runApplication()
    {
        console.log("hello world");

        let title = document.getElementById("newstitle");
        console.log(title);
        let newsitem1 = document.getElementsByClassName("gamenews")[0]
        console.log(newsitem1)
        let newsitem2 = document.getElementsByClassName("gamenews")[1]
        console.log(newsitem2)

        let random = Math.random();
        console.log(random)


        if(random < 0.2)
        {
            title.style.backgroundColor = "#FF0000";
        } else {
            title.style.backgroundColor = "#ffff0f";
        }

        if(random < 0.4)
        {
            newsitem1.style.backgroundColor = "#Ff2093";
        } else {
            newsitem1.style.backgroundColor = "#fF4350";
        }

        if(random < 0.6)
        {
            newsitem2.style.backgroundColor = "#ffff0f";
        } else {
            newsitem2.style.backgroundColor = "#FF0000";
        }

    }
}

let app = new App();
app.runApplication();