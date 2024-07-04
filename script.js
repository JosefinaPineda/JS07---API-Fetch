document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const userTable = document.getElementById('userTable');
    const loadDataBtn = document.getElementById('loadDataBtn');

    const getUsers = async () => {
        try {
            const response = await fetch('https://reqres.in/api/users?delay=3');
            const data = await response.json();

            loader.classList.add('d-none');
            userTable.classList.remove('d-none');

            userTable.querySelector('tbody').innerHTML = '';

            data.data.forEach(user => {
                const row = `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.first_name}</td>
                        <td>${user.last_name}</td>
                        <td>${user.email}</td>
                        <td><img src="${user.avatar}" class="img-fluid rounded-circle" style="max-width: 50px;" alt="Avatar"></td>
                    </tr>
                `;
                userTable.querySelector('tbody').insertAdjacentHTML('beforeend', row);
            });
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    };
    
    loadDataBtn.addEventListener('click', () => {
        loader.classList.remove('d-none');
        getUsers();
    });
});
