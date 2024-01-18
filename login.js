let loginFormEl=document.getElementById('loginForm');
let usernameEl=document.getElementById('username');
let passwordEl=document.getElementById('password');
let messageEl=document.getElementById('message');
let errorMsgNameEl=document.getElementById('errorMsgName');
let errorMsgPasswordEl=document.getElementById('errorMsgPassword');
usernameEl.addEventListener('blur',function(event){
        if(event.target.value===''){
            errorMsgNameEl.textContent='*required'
        }
        else{
            errorMsgNameEl.textContent=''
        }
})
passwordEl.addEventListener('blur',function(event){
        if(event.target.value===''){
            errorMsgPasswordEl.textContent='*required'
        }
        else{
            errorMsgPasswordEl.textContent=''
        }
})
function submitFunction(){
        if (usernameEl.value==='sneha' && passwordEl.value==='sneha123'){
            messageEl.textContent='login successful!!'
            window.location.href = 'home.html';
        }
        else if (username.value === 'cloudplinth' && password.value === 'cloudplinth@123'){
            messageEl.textContent='login successful!!'
            window.location.href = 'home.html';
        }
        else{
            messageEl.textContent = 'Invalid credentials. Please try again.'; 
        }
}
loginFormEl.addEventListener('submit',function(event){
    event.preventDefault();
    submitFunction()
    loginFormEl.reset()
})
