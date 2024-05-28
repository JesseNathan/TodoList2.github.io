// const input = document.querySelector('.inputbox');
// input.addEventListener('submit', (event) => {
//   event.preventDefault()
//   const username = document.querySelector('.username')
//   const password = document.querySelector('.password')

//   const loginBtn = document.querySelector('#login-btn')

//   const storageUsername = localStorage.getItem('username')
//   const storagePassword = localStorage.getItem('password')

//   loginBtn.onclick = () => {
//     console.log('Logged In')
//     if(username.value === storageUsername && password.value === storagePassword){
//       alert(`Login successful, welcome ${username.value}`);
//       window.location.href = 'Project/TodoList/home.html';
//     }
//     else{ 
//       alert('Invalid username or password')
//     }
//   }
// })

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login-Form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword == password) {
      alert(`Login berhasil, selamat datang ${username}`);
      window.location.href = '/TodoList/home.html'; 
    } else {     
        alert('Nama pengguna atau kata sandi salah');
      } 

  });
});



// pake arrow function aja, nyoba nyoba ak //

// napa aku kasih id login-Form ke tag form biar gampang aja, terus buat submitnya di pindahin ke dalem //ok
