window.addEventListener('load', function () {

    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {

        let errors = [];

        const firstName = document.querySelector('#firstName');
        const lastName = document.querySelector('#lastName');
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const image = document.querySelector('#image');

        if (firstName.value.trim().length < 2) {
            errors.push('El nombre debe tener al menos 2 caracteres.');
        }

        if (lastName.value.trim().length < 2) {
            errors.push('El apellido debe tener al menos 2 caracteres.');
        }

        if (email.value.trim() === '') {
            errors.push('Debes ingresar un email.');
        }

        if (!email.value.includes('@')) {
            errors.push('El email no es válido.');
        }

        if (password.value.length < 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres.');
        }

        if (image.value !== '') {

            let extension = image.value.split('.').pop().toLowerCase();

            let allowed = ['jpg', 'jpeg', 'png', 'gif'];

            if (!allowed.includes(extension)) {
                errors.push('La imagen debe ser JPG, JPEG, PNG o GIF.');
            }

        }

        if (errors.length > 0) {

            e.preventDefault();

            alert(errors.join('\n'));

        }

    });

});