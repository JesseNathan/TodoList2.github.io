// document.getElementById('registerForm').addEventListener('submit', (event) => {
//   event.preventDefault();

//   const username = document.querySelector('#username').value;
//   const password = document.querySelector('#password').value;

//   // Ambil data user dari localStorage, kalo ada jess 
//   let users = JSON.parse(localStorage.getItem('users')) || [];

//   // Periksa apakah nama pengguna sudah ada
//   if (users.some(user => user.username === username)) {
//     alert('Nama pengguna sudah terdaftar, pilih nama pengguna lain.');
//   } else {
//     // Tambah pengguna baru ke daftar(array)
//     users.push({ username: username, password: password });
//     localStorage.setItem('users', JSON.stringify(users));
//     alert('Pengguna berhasil didaftarkan');
//     window.location.href = 'login.html';
//   }
// });


const registerButton = document.querySelector('#register-button');

registerButton.addEventListener('click', function(event) {
  event.preventDefault();
  register();
});

function register() {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const storedUsername = localStorage.getItem(username);

  if(username == "" && password == "") {
    alert("Please fill in the required fields!");
    return;
  } else if(username == "") {
    alert("Please enter username!");
    return;
  } else if(password == "") {
    alert("Please enter password!");
    return;
  }

  if(username == storedUsername) {
    alert("Username already exists!");
  } else {
    localStorage.setItem(username, password);
    alert('Account registered!')
    window.location.href = "Login.html";
  } 
}


// const registerButton = document.getElementById('register-button')

// registerButton.addEventListener('click', () => {
//   const registerForm = document.querySelector('#register-form');
  

//   registerForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const username = document.querySelector('#username').value;
//     const password = document.querySelector('#password').value;

//     // Ambil data pengguna dari localStorage
//     let users = JSON.parse(localStorage.getItem('users')) || [];

//     // Periksa apakah pengguna sudah terdaftar
//     const userExists = users.find(user => user.username === username);

//     if (userExists) {
//       alert('Pengguna sudah terdaftar');
//     } else {
//       // Tambahkan pengguna baru
//       users.push({ username: username, password: password });
//       localStorage.setItem('users', JSON.stringify(users));
//       alert('Registrasi berhasil');
//       window.location.href = 'Login.html'
//     }
//   });
// })