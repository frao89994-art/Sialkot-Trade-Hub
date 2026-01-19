/* ================= LOGIN REDIRECT ================= */
function login(){
  let role = document.getElementById("role").value;
  if(role === "factory"){
    window.location = "factory-dashboard.html";
  }else{
    window.location = "dashboard.html";
  }
}

/* ================= PLACE ORDER → WHATSAPP ================= */
function placeOrder(){
  let name    = document.getElementById("name").value;
  let product = document.getElementById("product").value;
  let qty     = document.getElementById("qty").value;
  let country = document.getElementById("country").value;

  let commission = country === "Pakistan" ? qty * 50 : qty * 100;

  let msg =
`📦 *NEW ORDER* | Sialkot Trade Hub

👤 Buyer: ${name}
📦 Product: ${product}
🔢 Quantity: ${qty}
🌍 Country: ${country}
💰 Commission: Rs ${commission}`;

  window.open(
    "https://wa.me/923042249321?text=" + encodeURIComponent(msg),
    "_blank"
  );
}

/* ================= CONTACT US → WHATSAPP FEEDBACK ================= */
function sendMessage(){

  let name  = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg   = document.getElementById("msg").value.trim();

  if(name === "" || email === "" || msg === ""){
    alert("Please fill all fields");
    return;
  }

  let feedbackText =
`📩 *New Feedback Received*

👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${msg}

📍 Source: Sialkot Trade Hub Website`;

  let whatsappURL =
    "https://wa.me/923042249321?text=" +
    encodeURIComponent(feedbackText);

  window.open(whatsappURL, "_blank");
}

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      ?.scrollIntoView({ behavior: "smooth" });
  });
});
