function checkInput() {
    
    const testUsername = "asdfTest";
    const testPassword = "thisismypassword"

    const inputUsername = document.getElementById("inputUsername").value;
    const inputPassword = document.getElementById("inputPassword").value; 

    if (inputUsername == testUsername && inputPassword == testPassword) {
        window.location.href = "https://localhost:8080/build/src/app/pages/page.html"
    }
}