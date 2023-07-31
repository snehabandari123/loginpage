const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
const username = loginForm.username.value;
const password = loginForm.password.value;
  if (username === 'sneha' && password === '123') {
    message.textContent = 'Login successful!';
    window.location.href = 'home.html';

  } else if(username === 'cloudplinth' && password === 'cloudplinth@123'){
    message.textContent = 'Login successful!';
  }
  else {
    message.textContent = 'Invalid credentials. Please try again.'; 
  }
loginForm.reset();
});
