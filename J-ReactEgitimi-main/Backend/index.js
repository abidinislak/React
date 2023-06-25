const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=> {
    const payload = {
        name: "Taner Saydam",
        email: "tanersaydam@gmail.com"
    }

    const options = {
        expiresIn: "30d"
    }

    const secretKey = "my secret key my secret key 1324546as."


    let token = jwt.sign(payload,secretKey,options);

    res.json({accessToken: token})
});

app.post("/api/login", (req,res)=> {
    try {
        const body = req.body;
        const {email, password} = req.body;        

        console.log(req.body);
        if(email=== "tanersaydam@gmail.com" && password === "123456"){
            const token = jwt.sign({email: email}, "secret key", {expiresIn: "30d"});

            res.json({accessToken: token})
        }else{
            res.status(401).json({hata: "Kullanıcı maili ya da şifre hatalı!"})
        }

    } catch (error) {
        res.status(500).json({hata:error})
    }
})

app.listen(5000);