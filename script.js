async function book() {
  const data = {
    duration: document.getElementById("duration").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value
  };

  alert("Redirection vers paiement (Stripe à connecter ensuite)");

  console.log(data);
}