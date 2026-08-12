document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. BOTÓN MODO OSCURO / CLARO GLOBAL
    // ==========================================
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
    
    // ==========================================
    // 2. BUSCADOR DE PACIENTES
    // ==========================================
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

    // ==========================================
    // 3. LÓGICA DEL CRUD DE PACIENTES
    // ==========================================
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

    // ==========================================
    // 4. LÓGICA DE LA API (GATITOS / ANIMALES)
    // ==========================================
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

    // ==========================================
    // 5. LÓGICA DEL EQUIPO VETERINARIO (CRUD Y ELIMINACIÓN)
    // ==========================================
    const formVeterinario = document.getElementById("formVeterinario");
    const contenedorEquipo = document.getElementById("contenedor-equipo");

    if (contenedorEquipo) {
        // Delegación de eventos unificada para eliminar CUALQUIER tarjeta (estática o dinámica)
        contenedorEquipo.addEventListener("click", (e) => {
            if (e.target.classList.contains("btn-eliminar")) {
                const confirmado = confirm("¿Seguro quiere descartar a este especialista?");
                
                if (confirmado) {
                    const tarjetaColumna = e.target.closest(".col-md-5");
                    if (tarjetaColumna) {
                        tarjetaColumna.remove();
                    }
                }
            }
        });
    }

    if (formVeterinario && contenedorEquipo) {
        formVeterinario.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombreVet").value;
            const especialidad = document.getElementById("especialidadVet").value;
            const descripcion = document.getElementById("descripcionVet").value;
            const inputImagen = document.getElementById("imagenVet");
            const archivo = inputImagen.files[0];

            if (archivo) {
                const imagenUrl = URL.createObjectURL(archivo);

                const nuevaTarjeta = document.createElement("div");
                nuevaTarjeta.className = "col-md-5";
                nuevaTarjeta.innerHTML = `
                    <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden bg-white d-flex flex-column">
                        <div class="overflow-hidden">
                            <img src="${imagenUrl}" class="card-img-top" alt="${nombre}" style="height: 380px; object-fit: cover;">
                        </div>
                        <div class="card-body text-center p-4 d-flex flex-column justify-content-between flex-grow-1">
                            <div>
                                <h3 class="h4 card-title text-success fw-bold mb-1">${nombre}</h3>
                                <p class="text-success fw-medium small mb-3">${especialidad}</p>
                                <p class="card-text text-secondary small leading-relaxed">${descripcion}</p>
                            </div>
                            <div class="mt-4">
                                <button class="btn btn-outline-danger btn-sm w-100 btn-eliminar">Descartar Especialista</button>
                            </div>
                        </div>
                    </div>
                `;

                contenedorEquipo.appendChild(nuevaTarjeta);

                formVeterinario.reset();
                const modalElement = document.getElementById('modalVeterinario');
                const modal = bootstrap.Modal.getInstance(modalElement);
                if (modal) {
                    modal.hide();
                }
            }
        });
    }

});