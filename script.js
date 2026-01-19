function login(){
  let role=document.getElementById("role").value;
  if(role==="factory"){
    window.location="factory-dashboard.html";
  }else{
    window.location="dashboard.html";
  }
}

function placeOrder(){
  let name=document.getElementById("name").value;
  let product=document.getElementById("product").value;
  let qty=document.getElementById("qty").value;
  let country=document.getElementById("country").value;

  let commission = country==="Pakistan" ? qty*50 : qty*100;

  let msg=`ORDER | Sialkot Trade Hub
Buyer: ${name}
Product: ${product}
Quantity: ${qty}
Country: ${country}
Commission: Rs ${commission}`;

  window.open(
    "https://wa.me/923042249321?text="+encodeURIComponent(msg),
    "_blank"
  );
}
/* ================= CONTACT FORM → WHATSAPP ================= */
function sendMessage(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg").value;

  let whatsappURL =
    "https://wa.me/923042249321?text=" +
    encodeURIComponent(
      "Name: " + name +
      "\nEmail: " + email +
      "\nMessage: " + msg
    );

  window.open(whatsappURL, "_blank");
}

/* ================= OPTIONAL: SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
    ?.scrollIntoView({behavior:"smooth"});
  });
});
/* ================= CONTACT US → WHATSAPP FEEDBACK ================= */
function sendMessage(){

  let name  = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg   = document.getElementById("msg").value.trim();

  if(name==="" || email==="" || msg===""){
    alert("Please fill all fields");
    return;
  }

  let feedbackText =
    "📩 *New Feedback Received* \n\n" +
    "👤 Name: " + name + "\n" +
    "📧 Email: " + email + "\n" +
    "💬 Message: " + msg + "\n\n" +
    "📍 Source: Sialkot Trade Hub Website";

  let whatsappURL =
    "https://wa.me/923042249321?text=" +
    encodeURIComponent(feedbackText);

  window.open(whatsappURL, "_blank");
}

