
function record_voice(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Jl12jrhK4/model.json',modelLoaded);
}

function modelLoaded(){
    console.log("MODEL LOADED!!");
    classifier.classify(display_audio);
}

function display_audio(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("sound").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = (results[0].confidence*100).toFixed(3)+"%";

        A1 = document.getElementById("alien_clap");
        A2 = document.getElementById("alien_whistle");
        A3 = document.getElementById("alien_snap");
        A4 = document.getElementById("alien_background");

        if(results[0].label=="CLAP"){
            A1.src = "aliens-01.gif";
            A2.src = "aliens-02.png";
            A3.src = "aliens-03.png";
            A4.src = "aliens-04.png";    
        }
        else if(results[0].label=="Whistle"){
            A1.src = "aliens-01.png";
            A2.src = "aliens-02.gif";
            A3.src = "aliens-03.png";
            A4.src = "aliens-04.png";   
        }
        else if(results[0].label=="SNAP"){
            A1.src = "aliens-01.png";
            A2.src = "aliens-02.png";
            A3.src = "aliens-03.gif";
            A4.src = "aliens-04.png";   
        }
        else{
            A1.src = "aliens-01.png";
            A2.src = "aliens-02.png";
            A3.src = "aliens-03.png";
            A4.src = "aliens-04.gif";   
        }
    }
}


