
console.log("connected");

var firebaseConfig = {
  apiKey: "AIzaSyBgkBUh3Jxkya6NW0CcKh0ZkV3tq70Nd6c",
  authDomain: "buddy.com",
  databaseURL: "https://buddy-bbde5.firebaseio.com/",
  projectId: "buddy-bbde5",
  storageBucket: "gs://buddy-bbde5.appspot.com/",
  messagingSenderId: "905442756005",
  appId: "1:905442756005:android:6179c8baffe6aab326944c"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var $$ = Dom7;
$$(document).on('page:init', function (e) {
  // Page Data contains all required information about loaded and initialized page
  var page = e.detail;
  var profileData = "";
  // console.log('test rod outside');
  // snapshot function to get notify
  db.collection("volunteer_info").onSnapshot(function (snapshot) {
    var listData = "";
    // console.log('test rod inside');
    snapshot.forEach(function (change) {
      // console.log(change.data());
      var bio = change.data().Bio;
      var name = change.data().Name;
      localStorage.setItem("user_name",name);
      // console.log(name);
      var nationality = change.data().Nationality;
      var occupation = change.data().Occupation;
      var profile = change.data().Profile;
      var username = change.data().Username;
      var dbId = change.id;
      listData += `<div id="${dbId}" data-name="${name}">
              <div>
                    <div class="card demo-card-header-pic">
                          <a href="#" data-id="${dbId}" data-popup=".popup-firstVolt" class="popup-open" >
                                <div class="card-content">
                                      <img src="${profile}" width="100%" height="100px" />
                                      <img class="flag-icon" src="image/flags/flags-02.svg" width="25" />
                                      <div>${name}</div>
                                      <h6>${occupation}</h6>
                                </div>
                          </a>
                    </div>
              </div>
          </div>`;
    })
    document.getElementById('gridFormation').innerHTML = listData;
    snapshot.forEach(function (change) {
      var zId = change.id;
      var profile = change.data().Profile;
      let pop = document.getElementById(`${zId}`);
      // console.log("LIST ITEM ", pop.target.id);
      pop.addEventListener('click', () => {
        profileData = `<div>
                    <div class="image-about">
                      <img src="/image/dummy1.jpg" alt="volt-image">
                    </div>
                    <div class="about-body" id="profile-${change.data().Id}">
                          <h3>${change.data().Name}</h3>
                          <p>${change.data().Bio}</p>
                          <button onclick="window.location='../pages/chat-message.html'"
                          class="text-me button button-outline button-raised">Text Me</button>
                    </div></div>`;
        
        localStorage.setItem("receiverId",change.data().Id);
        // ==============================================================
        // From here code has been a contribution Of IA ROD ORNELLAS
        
        app.emit('popupOpened', profileData);
        
      })
    });
  })
  app.on('popupOpened', function (profile) {
    let popupProfile = document.getElementById('profileDATA').innerHTML;
    if (popupProfile.length == 0) {
      document.getElementById('profileDATA').innerHTML = profile;
    }
    $$('.popup-firstVolt').on('popup:close', function () {
      if (popupProfile.length > 0) {
        document.getElementById('profileDATA').innerHTML = '';
        console.log('POPUP CLOSE and profile removed');
      }
       // ==============================================================
    });

  });
  $$('.popup-firstVolt').on('popup:open', function () {
    
    
     // ==============================================================
  });
})

