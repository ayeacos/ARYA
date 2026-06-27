window.addEventListener('load', function () {

    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {

        let errors = [];

        const email = document.querySelector('#email');
        const password = document.querySelector('#password');

        if (email.value.trim() === '') {
            errors.push('Debes ingresar un email.');
        }

        if (!email.value.includes('@')) {
            errors.push('El email no es válido.');
        }

        if (password.value.trim() === '') {
            errors.push('Debes ingresar una contraseña.');
        }

        if (errors.length > 0) {

            e.preventDefault();

            alert(errors.join('\n'));

        }

    });

});