import onChange from 'on-change';

export default (elements, i18n, state) => {

  const { form, fields, errorFields } = elements;

  const generateFormControl = (fieldType, fieldName, fieldText) => {
    const divEl = document.createElement('div');
    const labelEl = document.createElement('label');
    const inputEl = document.createElement('input');
    const errEl = document.createElement('div');

    divEl.classList.add('mb-3');
    labelEl.classList.add('form-label');
    inputEl.classList.add('form-control');
    errEl.classList.add('invalid-feedback');

    labelEl.htmlFor = fieldName;
    inputEl.id = fieldName;
    inputEl.type = fieldType;
    inputEl.name = fieldName;
    errEl.id = `error-${fieldName}`;

    labelEl.textContent = fieldText;

    divEl.append(labelEl);
    divEl.append(inputEl);
    divEl.append(errEl);

    return divEl;
  };

  const renderForm = () => {
    const headingEl = document.createElement('h2');
    headingEl.classList.add('mb-5');
    headingEl.textContent = i18n.t('heading');
    form.append(headingEl);
    const username = generateFormControl('text', 'username', i18n.t('username'));
    form.append(username);
    const password = generateFormControl('password', 'password', i18n.t('password'));
    form.append(password);
    const confirmPassword = generateFormControl('password', 'confirmPassword', i18n.t('confirmPassword'));
    form.append(confirmPassword);
    const button = document.createElement('button');
    button.type = 'submit';
    button.classList.add('btn', 'btn-primary', 'mt-3');
    button.textContent = i18n.t('signupBtn');
    form.append(button);
  }

  const getFormElements = () => {
    fields.username = document.querySelector('#username');
    fields.password = document.querySelector('#password');
    fields.confirmPassword = document.querySelector('#confirmPassword');

    const formFields = Object.keys(fields);

    formFields.forEach((field) => errorFields[field] = document.querySelector(`#error-${field}`))
  };

  const handleErrors = () => {
    const formFields = Object.keys(fields);
    formFields.forEach((item) => {
      if (!state.form.errors[item]) {
        fields[item].classList.remove('is-invalid');
        fields[item].classList.add('is-valid');
      } else {
        fields[item].classList.add('is-invalid');
        fields[item].classList.remove('is-valid');
        const itemErrors = state.form.errors[item]
        itemErrors.forEach((error) => errorFields[item].textContent = i18n.t(error.key, error.values))
      }
    })
  };

  const clearErrors = () => {
    Object.values(errorFields).forEach((field) => field.textContent = '');
  }


  const watchedState = onChange(state, (path, value, prevValue) => {
    console.log('path: ', path);
    console.log('value: ', value);
    console.log('prevValue: ', prevValue);
    switch (path) {
      case 'form.status':
        renderForm();
        getFormElements();
        break;
      case 'form.errors':
        handleErrors();
        break;
      case 'form.valid':
        clearErrors();
        break;
      default:
        break;
    }
  });

  return watchedState;
};
