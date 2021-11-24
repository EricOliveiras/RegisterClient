
const api = axios.create({
  baseURL: 'http://localhost:8000/user',
});


function getUser() {
  api.get()
    .then(response => {
      
      const render = document.getElementById('render');
      const btnFind = document.querySelector('.btn-find-all');
      
      btnFind.addEventListener('click', (e) => {
        e.preventDefault();

        const data = response.data;

        data.forEach(user => {
          const userElement = document.createElement('div');
          userElement.innerHTML = `
            <h2>${user.name}</h2>
            <p>${user.cpf}</p>
            <p>${user.email}</p>
            <p>${user.fone}</p>
          `;
          render.appendChild(userElement);
        });
      });
    })
    .catch (error => {
      console.log(error);
    });
};

getUser();