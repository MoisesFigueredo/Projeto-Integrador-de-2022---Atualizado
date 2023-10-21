function  Login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  if(email == 'admin'&& senha == 'admin'){
    alert("Olá admin");
    location.href = "table.html";
    }else{
      
      alert("Login incorreto");
    }
    
}

document.getElementById('login').addEventListener('click', Login);