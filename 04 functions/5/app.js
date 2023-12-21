class App 
{
    anotherFunctionWithArguments(aArgument) 
    {
        console.log("Hello world")
    }

    MARIO() 
    {
        console.log("MARIO!!")
    }

    BWAHAHA()
    {
        let log = console.log("BWAHAHA!!!")
        return log;
    }

    plus()
    {
        let a = 6
        let b = 14
        let final = a + b;
        return final
    }
}

let app = new App()
app.anotherFunctionWithArguments("mijn argument is iets...")
app.MARIO()
app.BWAHAHA()
console.log(app.plus())