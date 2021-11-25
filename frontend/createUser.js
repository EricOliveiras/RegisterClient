const api = axios.create();

function createUser() {
    api.post('http://localhost:8000/newuser', {
        name: document.getElementById('name').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        fone: document.getElementById('fone').value
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};

const bntCreateUser = document.querySelector('.btn-enviar');

bntCreateUser.addEventListener('click', (e) => {
  e.preventDefault();
  createUser();
});
