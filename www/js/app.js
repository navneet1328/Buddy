
// Dom7
var $$ = Dom7;
var routes;


// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Buddy', // App name
  theme: 'auto', // Automatic theme detection
 

  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

var userTypeValue=localStorage.getItem("userType");
var email=localStorage.getItem("Email");
// if(userTypeValue=="Volt"){
      
//     // Init/Create views for Volunteer Home Page
//     var voltBuddyZoneView = app.views.create('#view-volt-BuddyZone', {
//       url: '/voltbuddyzone/'
//     });
//     var voltWallView = app.views.create('#view-volt-wall', {
//       url: '/volthappywall/'
//     });
//     var voltProfileView = app.views.create('#view-volt-profile', {
//       url: '/voltprofile/'
//     });


// }else if(userTypeValue=="Seeker"){
//     // Init/Create views for Seeker Home Page
//     var homeView = app.views.create('#view-home', {
//       url: '/home/'
//     });
//     var buddyzoneView = app.views.create('#view-buddyzone', {
//       url: '/buddyzone/'
//     });
//     var settingsView = app.views.create('#view-profile', {
//       url: '/profile/'
//     });
// }

if(email=="bhumili@gmail.com"){
      
   // Init/Create views for Volunteer Home Page
   var voltBuddyZoneView = app.views.create('#view-volt-BuddyZone', {
    url: '/voltbuddyzone/'
  });
  var voltWallView = app.views.create('#view-volt-wall', {
    url: '/volthappywall/'
  });
  var voltProfileView = app.views.create('#view-volt-profile', {
    url: '/voltprofile/'
  });

}else {
  var homeView = app.views.create('#view-home', {
    url: '/home/'
  });
  var buddyzoneView = app.views.create('#view-buddyzone', {
    url: '/buddyzone/'
  });
  var settingsView = app.views.create('#view-profile', {
    url: '/profile/'
  });
}

app.emit('myCustomEvent');

app.on('myCustomEvent', function () {
  window.addEventListener('load', function () {
    init();
  })
  
});
document.addEventListener("deviceready", init, false);
   
function init() {
alert("sfds");
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
	document.querySelector("#takePicture").addEventListener("touchend", function() {
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50,
			sourceType: Camera.PictureSourceType.CAMERA,
			destinationType: Camera.DestinationType.FILE_URI
		});

	});

	//Use from Library
	document.querySelector("#usePicture").addEventListener("touchend", function() {
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			destinationType: Camera.DestinationType.FILE_URI
		});

	});

}



//Login Screen Demo
// $$('#my-login-screen .login-button').on('click', function () {
//   var username = $$('#my-login-screen [name="username"]').val();
//   var password = $$('#my-login-screen [name="password"]').val();

//   app.loginScreen.close('#my-login-screen');

//   app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
// });



/* POPOVER ========================================*/
// Events

/*Edit Photo Button ===============================*/
//  to open the toast


// Create toast with callback on close
// var toastWithCallback = app.toast.create({
//   text: 'Callback on close',
//   closeButton: true,
//   on: {
//     close: function () {
//       app.dialog.alert('Toast closed');
//     },
//   }
// });
// document.getElementById('.open-toast-callback').addEventListener('click', function () {
//   console.log("chlra h!");
//   toastWithCallback.open();
// });

// Camera ==============================================================


// $$('.popover-links').on('popover:open', function (e) {
// 	console.log('popover open');
//   });
//   $$('.popover-links').on('popover:opened', function (e) {
// 	console.log(' popover opened');
//   });

  // ======================================================================
