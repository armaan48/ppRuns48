const ex = require("express")
const bd = require("body-parser")
const app =ex();
const fs = require('fs');


app.use(ex.static("client"));
app.use(bd.json());
function predictLinearRegression(inputData, coef, intercept) {
    // Ensure the inputData is an array
    if (!Array.isArray(inputData)) {
        throw new Error('Input data should be an array');
    }   

    // Perform dot product of coefficients and input data
    let prediction = intercept;
    for (let i = 0; i < inputData.length; i++) {
        prediction += coef[i] * inputData[i];
    }

    return prediction;
}

  
    
app.post("/result" , function(req, res){
    var wk = (req.body.wickets);
    var t1 = (req.body.team1);
    var t2 = (req.body.team2);
    var stad = (req.body.stadium);
    let fileName = ['./models/P' + (String)(t1 - 1) + "1" , './models/P' + (String)(t2 - 1) + "2" , './models/P' + String(t1 - 1) + "S" , './models/PSF']
    let ans = [ 0 , 0,  0, 0 ]
    let inp = [ [ t2 , wk ] , [ t1 , wk ] , [stad , wk] , [stad , wk]]
    for (let i=0;i<4;i++){

        const modelJson = fs.readFileSync(fileName[i] + '.txt', 'utf8');
        const modelData = JSON.parse(modelJson);
    
        // Extract model coefficients and intercept
        const { coef, intercept } = modelData;

        // Perform predictions
        ans[i] = predictLinearRegression(inp[i], coef, intercept);
    }

    res.send((String)((ans[0]+ans[1]+ans[2]+ans[3])/4));
    return ;
})
      

const port = process.env.PORT || 3000;
app.listen(port , ()=>console.log('Listening:' + port));



