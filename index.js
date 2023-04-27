const ex = require("express")
const bd = require("body-parser")
const {spawn } = require("child_process")
const app =ex();


app.use(ex.static("client"));
app.use(bd.json());


app.post("/result" , function(req, res){
    
    
    var wk = (req.body.wickets);
    var t1 = (req.body.team1);
    var t2 = (req.body.team2);
    var stad = (req.body.stadium);
    let pyr = spawn("python" , ['demo.py' , wk ,t1 , t2 , stad]);
    pyr.stdout.on('data' , (data)=>{
        var c = data.toString();
        console.log(c);
        return ;
        
         //res.send(data.toString());
    })
    pyr.stderr.on('data', (data) => {
    console.error('stderr: ', data.toString('utf8'));
    })
    pyr.on('close' , (code)=>{
        console.log("child process ended: " + code);
    })
    res.send("[49]");
    console.log("SENDING: back");
    return ;
})
      

const port = process.env.PORT || 3000;
app.listen(port , ()=>console.log('Listening:' + port));



