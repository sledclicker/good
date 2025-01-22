document.getElementById("openPopup").addEventListener("click", function () {
  window.open("https://ajm19826.github.io/home", "_blank", "width=600,height=400");
});

function passWord() {
  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    const password = prompt("Please Enter Your Password:", "").toLowerCase();
    if (password === "ben10") {
      alert("We will redirect you shortly...");
      window.open("鴨子.html");
      return;
    } else {
      alert("Access Denied - Password Incorrect. Try Again.");
      attempts++;
    }
  }

  if (attempts === maxAttempts) {
    alert("Too many failed attempts!");
    window.history.back();
  }
}

// Replace document.write calls with DOM manipulations
function loadIframe(src, title) {
  const iframe = document.createElement("iframe");
  iframe.src = src;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.frameBorder = "0";
  iframe.allowFullscreen = true;

  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  backButton.onclick = () => location.reload();

  document.body.innerHTML = ""; // Clear the page
  document.body.appendChild(iframe);
  document.body.appendChild(backButton);

  document.title = title || "SmartSchool";
}

function gdash() {
  loadIframe("https://geometrydashonline.io", "Geometry Dash");
}

function lessons() {
  loadIframe("lesson.html", "Lessons");
}

function minecraft() {
  loadIframe("https://eaglecraft.pages.dev", "Minecraft");
}
