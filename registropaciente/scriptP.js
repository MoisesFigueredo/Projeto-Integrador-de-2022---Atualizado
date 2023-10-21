//Funções
const getLocalStorage = () =>
  JSON.parse(localStorage.getItem('db_client')) ?? [];

const setLocalStorage = (dbClient) =>
  localStorage.setItem('db_client', JSON.stringify(dbClient));

const tempClient = {
  firstname: 'nome',
  lastname: 'sobrenome',
  cpf: 'cpf',
  sus: 'sus',
  email: 'email',
  number: 'telefone',
  password: 'senha',
  confirmPassword: 'confirmasenha',
};

/*Update
const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};*/

//Cadastrar
const cadastrar = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

const isValidFields = () => {
  return document.getElementById('form').reportValidity();
};
const readClient = () => getLocalStorage();
//Eventos
/*
const isValidFields = () => {
  return document.getElementById('form').reportValidity();
};
*/
const salveClient = () => {
  //if (isValidFields()) {
  const Client = {
    firstname: document.getElementById('firstname').value,
    lastname: document.getElementById('lastname').value,
    bdate: document.getElementById('bdate').value,
    cpf: document.getElementById('cpf').value,
    sus: document.getElementById('sus').value,
    email: document.getElementById('email').value,
    number: document.getElementById('number').value,
    password: document.getElementById('password').value,
    confirmPassword: document.getElementById('confirmPassword').value,
  };
  //}
  cadastrar(Client);
  console.log('cadastrando');
  // }
};


document.getElementById('continue').addEventListener('click', salveClient);
