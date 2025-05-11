
    const $button = document.getElementById('button');
    const $email = document.getElementById('email');
    const $password = document.getElementById('password');

    $button.addEventListener('click', () => {

        const save_email = $email.value;
        localStorage.setItem('email_key', save_email);

        const save_password = $password.value;
        localStorage.setItem('password_key', save_password);
    });

    document.addEventListener('DOMContentLoaded', () => {
        const get_email = localStorage.getItem('email_key');
        $email.value = get_email;
        
        const get_password = localStorage.getItem('password_key');
        $password.value = get_password;
    });
