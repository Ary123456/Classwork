
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAAa1lYSMoo_h8AiZa97jQgZG-ynP2oZoQ",
      authDomain: "kwitter-app-4e786.firebaseapp.com",
      databaseURL: "https://kwitter-app-4e786-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-4e786",
      storageBucket: "kwitter-app-4e786.appspot.com",
      messagingSenderId: "148101010007",
      appId: "1:148101010007:web:1a0e3f8ac6691cf0160912"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room_names" + Room_names);
                  row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}
function redirectToRoomName(name) {
     console.log("REDIRECTING TO ROOM NAME");
     localStorage.setItem("room_name", room_name);
    
     window.location = "kwitter_page.html";
    
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";     

}
