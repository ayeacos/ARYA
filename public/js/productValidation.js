window.addEventListener('load', function () {

    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {

        let errors = [];

        const name = document.querySelector('#name');
        const description = document.querySelector('#description');
        const image = document.querySelector('#image');

        if (name.value.trim().length < 5) {
            errors.push('El nombre debe tener al menos 5 caracteres.');
        }

        if (description.value.trim().length < 20) {
            errors.push('La descripción debe tener al menos 20 caracteres.');
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