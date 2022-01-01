const firebaseConfig = {
    apiKey: "AIzaSyBDej1U4kCcWSlXBOwI_L5P_mpsiut04LI",
    authDomain: "pro-94-5dbe7.firebaseapp.com",
    databaseURL: "https://pro-94-5dbe7-default-rtdb.firebaseio.com",
    projectId: "pro-94-5dbe7",
    storageBucket: "pro-94-5dbe7.appspot.com",
    messagingSenderId: "755362265275",
    appId: "1:755362265275:web:f68c8a014fd8a85449119e"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addroom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          puspose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "witter_page.html";
}
function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
        Room_names = childKey;
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
});});}
getData();
function rediectToRoomName(name)
{
    localStorage.setItem("room_name", name);
    window.location ="witter_page.html";
}