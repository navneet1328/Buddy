// Dom7
var $$ = Dom7;
var routes;

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },

    };
  },

  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/home/'
});
var buddyzoneView = app.views.create('#view-buddyzone', {
  url: '/buddyzone/'
});
var settingsView = app.views.create('#view-profile', {
  url: '/profile/'
});


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

app.on('pageInit', function () {
  init();
});
 app.emit('myCustomEvent');

app.on('myCustomEvent', function () {
  init();
});

// Search Hide on Scroll ===============================================

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("searchbar").style.top = "0";
//   } else {
//     document.getElementById("searchbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// create searchbar
var searchbar = app.searchbar.create({
  // alert("hello");
  el: '.searchbar',
  searchContainer: '.buddyList',
  searchIn: '.item-title',
  on: {
    search(sb, query, previousQuery) {
      console.log(query, previousQuery);
    }
  }
});