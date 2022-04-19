document.getElementById('btn-submit').addEventListener('click', () => {
    //user email
    const userEmail = document.getElementById('user-email').value;

    //user password
    const userPass = document.getElementById('user-pass').value;

    if(userEmail == 'mhashik@gmail.com' && userPass == 'ashik'){
        window.location.href = 'banking.html'
    }

})
