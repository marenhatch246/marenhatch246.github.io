const greeting = document.getElementById("greeting");

greeting.style.textAlign = "center";
greeting.style.marginTop = "5px";
greeting.style.marginBottom = "5px";
greeting.style.fontSize = "30px";
greeting.style.fontFamily = "arial black, sans-serif";
greeting.style.color = "#07340aff";
greeting.style.border = "2px solid #07340aff";


const username = window.prompt("What's your name?", "Guest");
greeting.innerHTML = "Welcome to my website, " + username + "!";