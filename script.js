let products = [];

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user === "admin" && pass === "1234") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("userDisplay").innerText = user;
  } else {
    alert("Wrong credentials");
  }
}

function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;

  products.push({name, price});
  displayProducts();
}

function displayProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach(p => {
    list.innerHTML += `<p>${p.name} - ₹${p.price}</p>`;
  });
}
