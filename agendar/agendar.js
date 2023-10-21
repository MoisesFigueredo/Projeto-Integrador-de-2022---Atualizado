const getLocalStorage = () =>
  JSON.parse(localStorage.getItem('db_agendamento')) ?? [];

const setLocalStorage = (dbAgendamento) =>
  localStorage.setItem('db_agendamento', JSON.stringify(dbAgendamento));

const cadastrar = (Agendamento) => {
    const Agendamento = getLocalStorage();
    Agendamento.push(Agendamento);
    setLocalStorage(dbAgendamento);
  };
  
  const isValidFields = () => {
    return document.getElementById('form').reportValidity();
  };
  //Eventos
  /*
  const isValidFields = () => {
    return document.getElementById('form').reportValidity();
  };
  */
  const salveAgendamento = () => {
    //if (isValidFields()) {
    const Agendamento = {
      firstname: document.getElementById('nomeatdm').value,
      lastname: document.getElementById('descricao').value,
      bdate: document.getElementById('pnumber').value,
      cpf: document.getElementById('localatd').value
    };
    //}
    cadastrar(Agendamento);
    Alert('cadastrando');
    location.href = "table.html";
    // }
  };
  
  
  document.getElementById('Agendar').addEventListener('click', salveAgendamento);
  