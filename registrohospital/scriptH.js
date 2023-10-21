const updateHospital = (index, hospital) => {
  const dbHospital = readHospital();
  dbHospital[index] = hospital;
  setLocalStorage(dbHospital);
};
/*
const isValidFields = () => {
 return document.getElementById('form').reportValidity()
}
*/

const readHospital = () => getLocalStorage();

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem('db_hospital')) ?? [];
const setLocalStorage = (dbHospital) =>
  localStorage.setItem('db_hospital', JSON.stringify(dbHospital));

const cadHospital = (hospital) => {
  const dbHospital = getLocalStorage();
  dbHospital.push(hospital);
  setLocalStorage(dbHospital);
};

const saveHospital = () => {
  // if (isValidFields()){
  const hospital = {
    nome: document.getElementById('nhospital').value,
    email: document.getElementById('hemail').value,
    cep: document.getElementById('hcep').value,
    cnpj: document.getElementById('cnpj').value,
    endereço: document.getElementById('hendereco').value,
    numero: document.getElementById('hnumber').value,
    cidade: document.getElementById('hcidade').value,
    uf: document.getElementById('ufh').value,
    bairro: document.getElementById('hbairro').value,
    senha: document.getElementById('hpassword').value,
    confirmSenhar: document.getElementById('hconfirmPassword').value,
  };
  cadHospital(hospital);
  // }
};

const createRow = (hospital) => {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
  `;
};

const updateTable = () => {
  const dbHospital = readHospital();
  dbHospital.forEach(createRow);
};

document.getElementById('Continuar').addEventListener('click', saveHospital);
