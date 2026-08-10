document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. LÓGICA DEL CRUD  ---
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


    // --- 2. LÓGICA DE LA API ---
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