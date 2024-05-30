// Función para iniciar la lógica cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const usuariosContainer = document.getElementById('usuarios');

    // Obtener usuarios desde la API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(users => {
            // Iterar sobre los usuarios y crear elementos HTML para mostrarlos
            users.forEach(user => {
                // Crear un contenedor para cada usuario
                const userDiv = document.createElement('div');
                userDiv.classList.add('user-container');
                userDiv.innerHTML = `
                    <p>ID: ${user.id}</p>
                    <p>Nombre: ${user.name}</p>
                    <p>Nombre de usuario: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>Sitio web: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <button data-user-id="${user.id}">Ver tareas</button>
                    <div class="tareas-container" id="tareas-${user.id}"></div>
                `;
                usuariosContainer.appendChild(userDiv);
            });

            // Añadir evento al botón "Ver tareas"
            document.querySelectorAll('button[data-user-id]').forEach(button => {
                button.addEventListener('click', (event) => {
                    const userId = event.target.getAttribute('data-user-id');
                    const tareasContainer = document.getElementById(`tareas-${userId}`);
                    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
                        .then(response => response.json())
                        .then(todos => {
                            tareasContainer.innerHTML = '';
                            todos.forEach(todo => {
                                const todoItem = document.createElement('div');
                                todoItem.textContent = todo.title;
                                todoItem.classList.add(todo.completed ? 'completed' : 'not-completed');
                                tareasContainer.appendChild(todoItem);
                            });
                        });
                });
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});
