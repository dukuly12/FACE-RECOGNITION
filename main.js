webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
webcam.attach('#camera');

function take_snapshot()
 {
    webcam.snap(function(data_url) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_url+'"/>';
});

console.log('ml5 version' , ml5.version);
classifier = imageClassfier('https://teachablemachine.withgoogle.com/models/zsq-6BuZG/',modelLoaded);
function modelLoaded() {
    console.log('Model Loaded');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
 
function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.tofixed(3);
    }
}