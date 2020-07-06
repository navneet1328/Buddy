app.emit('myCustomEvent');

app.on('myCustomEvent', function () {
  window.addEventListener('load', function () {
    init();
  })
  
});

// document.addEventListener("deviceready", init, false);
function init() {

  function onSuccess(imageData) {
    console.log('success');
    var image = document.getElementById('myImage');
    image.src = imageData;
  }

  function onFail(message) {
    navigator.notification.alert(
      message, null, "Camera Failure");
  }

  //Use from Camera
  takePicture.addEventListener("touchend", function () {
    console.log("Rod here in");
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      sourceType: Camera.PictureSourceType.CAMERA,
      destinationType: Camera.DestinationType.FILE_URI,
      mediaType:0,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 400
    });

  });

}