document.getElementById('submit-btn').addEventListener('click', function(e) {
    e.preventDefault();

            let isValid = true;
            let firstName = document.getElementById('first-name').value;
            let lastName = document.getElementById('last-name').value;
            let email = document.getElementById('email').value;
            let queryType = document.querySelector('input[name="query-type"]:checked');
            let message = document.getElementById('message').value;
            let consent = document.getElementById('consent');
            


    if(!firstName){
        document.getElementById("firstName-error").classList.remove('hidden');
        isValid = false;
    }
    if (!lastName) {
        document.getElementById('lastName-error').classList.remove('hidden');
        isValid = false;
    }

    if (!email ) {
        document.getElementById('email-error').classList.remove('hidden');
        isValid = false;
    }

    if (!queryType) {
        document.getElementById('queryType-error').classList.remove('hidden');
        isValid = false;
    }

    if (!message) {
        document.getElementById('message-error').classList.remove('hidden');
        isValid = false;
    }

    if (!consent) {
        document.getElementById('consent-error').classList.remove('hidden');
        isValid = false;
    }
    
});

