$(document).ready(function () {
    // RFC
    $('#rfc-form').submit(function (event) {
        event.preventDefault(); 

        // Obtener los valores
        const nombre = $('#nombre').val().toUpperCase();
        const apellidoPaterno = $('#apellido-paterno').val().toUpperCase();
        const apellidoMaterno = $('#apellido-materno').val().toUpperCase();
        const fechaNacimiento = $('#fecha-nacimiento').val().split('-'); // Separar el año, mes y día

        // Concatenacion 
        const rfc = apellidoPaterno.substring(0, 2) + apellidoMaterno.substring(0, 1) + nombre.substring(0, 1) + fechaNacimiento[0].substring(2) + fechaNacimiento[1] + fechaNacimiento[2];

        // Mostrar RFC
        $('#rfc').val(rfc);
    });

    //Consulta api
    $('#api-form').submit(function (event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario

        // Obtener el valor del ID
        const id = $('#id-api').val();

        // Validar que se haya ingresado un valor para el ID
        if (id) {
            // Construir la URL de la API con el ID ingresado
            const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

            // Realizar la solicitud GET a la API usando jQuery
            $.get(apiUrl, function (data) {
                // Mostrar el nombre 
                $('#nombre-api').val(data.name);

                // Mostrar el email 
                $('#email-api').val(data.email);

                  // Mostrar el numero 
                 $('#phone-api').val(data.phone);
            }).fail(function () {
                // Por si ID no existe
                alert('No se encontraron datos para el ID ingresado.');
            });
        } else {
            alert('Por favor, ingrese un ID registrado.');
        }
    });
});
