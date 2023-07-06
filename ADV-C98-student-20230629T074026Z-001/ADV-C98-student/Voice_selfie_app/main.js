var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start_button(){

  document.getElementById("textbox").innerHTML="";
recognition.start();
}

recognition.onresult= function(event){

    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
document.getElementById("textbox").innerHTML=Content;
if (Content = "Take my selfie") {
  speak(); 
}
}

function speak(){
  var synth = window.speechSynthesis;
  speak_data = "Taking your selfie in 5 seconds"
  var utter_this = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utter_this);
  Webcam.attach(camera);
  
  setTimeout(function(){
    take_snapshot();

  }, 5000);
}
camera=document.getElementById("camera");
Webcam.set({
  width: 360,
height: 250,
image_format: 'png',
png_quality: 90

});

function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_image" src= "'+ data_uri+'"/>'
  });
}