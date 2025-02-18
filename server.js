const express =require("express");
const app =express()
const port=3000

app.get('/', (req,res) =>{
    res.json({message:"Hello ! GO to signup page using the /Signup endpoint "})
})

app.get('/Signup' ,(req,res) =>{
    const{Username,Email,Password,Dateofbirth}= req.query

    if(Username){
        for(let i=0;i<Username.lenght();i++){
            if(!((Username[i]>='a' && Username[i]<='z') || (Username[i]>='A' && Username[i]<='Z'))){
                res.send('Username cannot be empty ')
            }
        }
    }

    if(Email){
        if(!Email.includes('@') || !Email.includes('.') || Email.indexOf('@')>Email.LastindexOf('.')){
            res.send('Email cannot be empty')
        }
    }

    if(Password){
        if(Password.lenght() < 8 && Password.lenght() > 16){
            res.send('Password Lenght should be greater than 8 and less than 16')
        }
    }else{
        res.status(200).send('Singup Successfull')
    }


});

app.listen(port ,() =>{
    console.log(`Server running on http://localhost:${port}`)
});