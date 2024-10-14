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
    function validerEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    if (!email ||validerEmail(email) ) {
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
    
    document.getElementById('firstName').addEventListener('input', function () {
        document.getElementById("firstName-error").classList.add('hidden');
    });
    
    document.getElementById('lastName').addEventListener('input', function () {
        document.getElementById('lastName-error').classList.add('hidden');
    });
    
    document.getElementById('email').addEventListener('input', function () {
        document.getElementById('email-error').classList.add('hidden');
    });
    
    document.querySelectorAll('input[name="query-type"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('queryType-error').classList.add('hidden');
        });
    });
    
    document.getElementById('message').addEventListener('input', function () {
        document.getElementById('message-error').classList.add('hidden');
    });
    
    document.getElementById('consent').addEventListener('change', function () {
        document.getElementById('consent-error').classList.add('hidden');
    });
    
});
