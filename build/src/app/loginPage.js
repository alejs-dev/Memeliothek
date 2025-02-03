function checkLoginInput() {
    let inputUsername = document.getElementById("inputUsername").value; 
    let inputPassword = document.getElementById("inputPassword").value;
    
    if (inputUsername == "testuser" && inputPassword == "hoden123") {
        window.location.href = "/build/src/app/home.html"
    } else {
        console.log("login failed, please try again...")
    }
}