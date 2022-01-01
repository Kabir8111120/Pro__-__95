function log_in()
{
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "witter_room.html";
}