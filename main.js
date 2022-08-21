var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function save(){
    recognition.start()
};

recognition.onresult=function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;

    console.log(Content);
    if(Content=="Take my selfie."){
        console.log("taking selfie ---");
        speak();
    };
    if(Content=="take my selfie"){
        console.log("taking selfie ---");
        speak();
    };
};
function speak(){
    synth=window.speechSynthesis;
    speak_data="Taking your Selfie in 5 Seconds";
    utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis)
    Webcam.attach(camera);
    setTimeout(function(){
        image_id="selfie_1";
        speak_data="Taking Another Selfie in 5 More Seconds";
        take_snapshot();
        utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis)
    }, 5000);
    setTimeout(function(){
        image_id="selfie_2";
        speak_data="Taking Another Selfie in 5 More Seconds";
        take_snapshot();
        utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis)
    }, 10000);
    setTimeout(function(){
        image_id="selfie_3";
        speak_data="Thats all the selfies";
        take_snapshot();
        utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis)
    }, 15000);
};

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");

function take_snapshot(){
    console.log(image_id);

    Webcam.snap(function(data_uri){
        if(image_id=="selfie_1"){
            document.getElementById("result1").innerHTML="<img id='selfie1' src='"+data_uri+"'>"
        }
        if(image_id=="selfie_2"){
            document.getElementById("result2").innerHTML="<img id='selfie2' src='"+data_uri+"'>"
        }
        if(image_id=="selfie_3"){
            document.getElementById("result3").innerHTML="<img id='selfie3' src='"+data_uri+"'>"
        }
    });
};