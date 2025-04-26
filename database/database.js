
(() => {

    const $button = document.getElementById('button');
    $button.addEventListener('click', () => {

        const save_email = document.getElementById('email').value;
        localStorage.setItem('email_key', save_email);
        const get_email = localStorage.getItem('email_key');
        console.log(get_email);

        const save_password = document.getElementById('password').value;
        localStorage.setItem('password_key', save_password);
        const get_password = localStorage.getItem('password_key');
        console.log(get_password);
    });

    document.addEventListener('DOMContentLoaded', () => {
            const get_email = localStorage.getItem('email_key');
            document.getElementById('email').value = get_email;
            
            const get_password = localStorage.getItem('password_key');
            document.getElementById('password').value = get_password;
    });

});
