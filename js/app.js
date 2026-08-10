document.addEventListener("DOMContentLoaded", () => {
    
    //BOTON MODO OSCURO / CLARO GLOBAL//
    const btnTheme = document.getElementById('btn-theme');
    const temaGuardado = localStorage.getItem('theme');

    if (temaGuardado === 'dark') {
        document.body.classList.add('dark-mode');
        if (btnTheme) btnTheme.textContent = '☀️ Modo Claro';
    }

    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const esOscuro = document.body.classList.contains('dark-mode');

            btnTheme.textContent = esOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
            localStorage.setItem('theme', esOscuro ? 'dark' : 'light');
        });
    } 
    
    // BUSCADOR DE PACIENTES //
    const inputBuscarPaciente = document.getElementById('buscar-paciente');
    if (inputBuscarPaciente) {
        inputBuscarPaciente.addEventListener('keyup', () => {
            const termino = inputBuscarPaciente.value.toLowerCase().trim();
            const filasPacientes = document.querySelectorAll('#tablaPacientes tr');

            filasPacientes.forEach(fila => {
                const contenidoFila = fila.textContent.toLowerCase();
                fila.style.display = contenidoFila.includes(termino) ? '' : 'none';
            });
        });
    }

    //LÓGICA DEL CRUD DE PACIENTES//
    const formPaciente = document.getElementById("formPaciente");
    const tablaPacientes = document.getElementById("tablaPacientes");

    if (formPaciente && tablaPacientes) {
        function mostrarPacientes() {
            let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
            tablaPacientes.innerHTML = "";
            
            pacientes.forEach((paciente, index) => {
                let fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${paciente.nombreMascota}</td>
                    <td>${paciente.especie}</td>
                    <td>${paciente.sintomas}</td>
                    <td><button class="btn btn-danger btn-sm" onclick="eliminarPaciente(${index})">Dar de alta</button></td>
                `;
                tablaPacientes.appendChild(fila);
            });
        }

        formPaciente.addEventListener("submit", (e) => {
            e.preventDefault();
            let nombreMascota = document.getElementById("nombreMascota").value;
            let especie = document.getElementById("especie").value;
            let sintomas = document.getElementById("sintomas").value;

            let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
            pacientes.push({ nombreMascota, especie, sintomas });
            localStorage.setItem("pacientes", JSON.stringify(pacientes));

            formPaciente.reset();
            mostrarPacientes();
        });

        window.eliminarPaciente = function(index) {
            let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
            pacientes.splice(index, 1);
            localStorage.setItem("pacientes", JSON.stringify(pacientes));
            mostrarPacientes();
        }

        mostrarPacientes();
    }

    //LÓGICA DE LA API//
    const imgAnimal = document.getElementById("imagen-animal");
    const btnCambiarFoto = document.getElementById("btn-cambiar-foto");

    function cargarFotoAnimal() {
        if (imgAnimal) {
            fetch("https://api.thecatapi.com/v1/images/search")
                .then(response => response.json())
                .then(data => {
                    imgAnimal.src = data[0].url;
                })
                .catch(error => {
                    console.log("Error al cargar la imagen", error);
                });
        }
    }

    if (imgAnimal) {
        cargarFotoAnimal();
    }

    if (btnCambiarFoto) {
        btnCambiarFoto.addEventListener("click", cargarFotoAnimal);
    }

});