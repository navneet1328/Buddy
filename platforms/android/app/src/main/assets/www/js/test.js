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
  document.querySelector("#takePicture").addEventListener("touchend", function () {
      console.log("BK here in");
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      sourceType: Camera.PictureSourceType.CAMERA,
      destinationType: Camera.DestinationType.FILE_URI,
      mediaType:0,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 400
    });

    //Use from Library
    document.querySelector("#usePicture").addEventListener("touchend", function () {
    console.log("BK in library");

    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.FILE_URI
    });

  });
  });

}