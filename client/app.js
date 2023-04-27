
var tn = {
    "RR" : 1,
    "GT" : 2 ,
    "RCB" : 3,
    "LSG" : 4,
    "SRH" : 5,
    "PBKS" : 6,
    "DC" : 7,
    "MI" : 8,
    "CSK" : 9,
    "KKR" : 10
};
var sn = {
    "Narendra Modi Stadium" : 1,
    "MA Chidambaram Stadium" : 2,
    "Arun Jaitley Stadium" : 3,
    "M.Chinnaswamy Stadium" : 4,
    "Wankhede Stadium" : 5,
    "Dr DY Patil Sports Academy" : 6,
    "Punjab Cricket Association IS Bindra Stadium" : 7,
    "Sawai Mansingh Stadium" : 8,
    "Rajiv Gandhi International Stadium" : 9,
    "Eden Gardens" : 10,
    "Maharashtra Cricket Association Stadium" : 11,
    "Brabourne Stadium" : 12,
    "Himachal Pradesh Cricket Association Stadium" : 13,
    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium" : 14
};
var nt = {
    1: "RR" ,
    2: "GT"  ,
    3:"RCB" ,
    4: "LSG" ,
    5: "SRH" ,
    6: "PBKS" ,
    7: "DC" ,
    8: "MI" ,
    9: "CSK",
    10: "KKR" 
}


var ns = {
    1: "Narendra Modi Stadium" ,
    2:"MA Chidambaram Stadium" ,
    3:"Arun Jaitley Stadium" ,
    4:"M.Chinnaswamy Stadium" ,
    5:"Wankhede Stadium" ,
    6:"Dr DY Patil Sports Academy" ,
    7:"Punjab Cricket Association IS Bindra Stadium" ,
    8:"Sawai Mansingh Stadium" ,
    9:"Rajiv Gandhi International Stadium" ,
    10:"Eden Gardens" ,
    11:"Maharashtra Cricket Association Stadium" ,
    12:"Brabourne Stadium" ,
    13:"Himachal Pradesh Cricket Association Stadium",
    14:"Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium" 
}

function click1(anything){
    var key = Number(anything);
    console.log("CLICKED\n")
    document.getElementsByClassName("T1")[0].value = String(nt[key]);
    var ky = nt[key].toLowerCase();
    document.getElementsByClassName("imgLeft")[0].src = String("images/" + ky + ".webp");

}
function click2(anything){
    var key = Number(anything);
    document.getElementsByClassName("T2")[0].value = String(ns[key]);


}
function click3(anything){
    var key = Number(anything);
    document.getElementsByClassName("T3")[0].value = String(nt[key]);
    var ky = nt[key].toLowerCase();
    
    document.getElementsByClassName("imgRight")[0].src = String("images/" + ky + ".webp");
}

function update(anything){
    console.log(Number(document.getElementsByClassName("center212")[0].innerHTML));
    
    var key =Number(document.getElementsByClassName("center212")[0].innerHTML);
    var inc = Number(anything);
    console.log(key + inc)
    if ((key + inc )>= 0 && (key+inc)<=10){

        document.getElementsByClassName("center212")[0].innerHTML = String(key + inc);
    }
    
}


function calculate(){
    console.log("calculate\n");
    const cl = new XMLHttpRequest();
    const url = '/result';
    var wk = document.getElementById("wks").innerHTML;
    console.log("HEEELLLLO:" + document.getElementById("team1").value  + " VS " +  document.getElementById("team2").value)
    var T1 = tn[document.getElementById("team1").value];
    var T2 = tn[document.getElementById("team2").value];
    var stad = sn[document.getElementById("stadium1").value];
    const params = { wickets: wk , team1 : T1 , team2:T2 , stadium : stad};
    cl.open("POST" , url , true  );
    cl.setRequestHeader('Content-type', 'application/json');

    cl.onreadystatechange = (e) => {
        
        
    }
    cl.onprogress = function(){
    }
    cl.onload = function(){
        var aa = cl.responseText.slice( 1  , 3);
        
        document.getElementById("predictedRuns").innerHTML = "Predicted Score of " + nt[T1] + " = " + aa;
    }
    cl.send(JSON.stringify(params));
    
}










