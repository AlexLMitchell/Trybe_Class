let stateInput;
let startInput;
let processButton;
let cleanButton;
const stateList = [
  ['Acre', 'AC'],
  ['Alagoas', 'AL'],
  ['Amapá', 'AP'],
  ['Amazonas', 'AM'],
  ['Bahia', 'BA'],
  ['Ceará', 'CE'],
  ['Distrito Federal', 'DF'],
  ['Espírito Santo', 'ES'],
  ['Goiás', 'GO'],
  ['Maranhão', 'MA'],
  ['Mato Grosso', 'MT'],
  ['Mato Grosso do Sul', 'MS'],
  ['Minas Gerais', 'MG'],
  ['Pará', 'PA'],
  ['Paraíba', 'PB'],
  ['Paraná', 'PR'],
  ['Pernambuco', 'PE'],
  ['Piauí', 'PI'],
  ['Rio de Janeiro', 'RJ'],
  ['Rio Grande do Norte', 'RN'],
  ['Rio Grande do Sul', 'RS'],
  ['Rondônia', 'RO'],
  ['Roraima', 'RR'],
  ['Santa Catarina', 'SC'],
  ['São Paulo', 'SP'],
  ['Sergipe', 'SE'],
  ['Tocantins', 'TO']
];


window.onload = function () {

  stateInput = document.querySelector('#state-input');
  startInput = document.querySelector('#start-input');
  processButton = document.querySelector('#process-button');
  cleanButton = document.querySelector('#clean-button');

  const mSelects = document.querySelectorAll('select');
  const mDates = document.querySelectorAll('.datepicker');
  const mModal = document.querySelector('#modal');

  stateList.forEach((state) => {
    const option = stateInput.appendChild(document.createElement('option'));
    option.innerText = state[0];
    option.value = state[1];
  });

  M.FormSelect.init(mSelects, {});
  M.Datepicker.init(mDates, {});
  M.Modal.init(mModal, {});

  new window.JustValidate('.form', {
    rules: {
      name: {
        maxLength: 40
      },
      cpf: {
        maxLength: 11,
        minLength: 11,
        required:true
      },
      address: {
        required:true
      },
      city: {
        required:true
      },
      state: {
        required:true
      },
      resume: {
        required:true
      },
      job: {
        required:true
      },
      jobdesc: {
        required:true
      },
      date: {
        required:true
      }
    },

    focusWrongField: true,

    submitHandler: function (form, values) {
      var modal = M.Modal.getInstance(mModal);
      const inputs = document.querySelectorAll('input');
      const result = document.querySelector('.result');
      result.innerHTML = "";
      inputs.forEach((input) => {
        const p = document.createElement('p');
        result.appendChild(p).innerText = `${input.getAttribute('data')}: ${input.value}`;
      });
      modal.open();
    },

    invalidFormCallback: function (errors) {
        console.log(errors);
    },
  });

  
  cleanButton.addEventListener('click', function (ev) {
    ev.preventDefault();
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      input.value = "";
    });
  });
}