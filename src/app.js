import i18next from 'i18next';
import resources from './locales/index';

const generateFormControl = (fieldType, fieldName, fieldText) => {
  const divEl = document.createElement('div');
  const labelEl = document.createElement('label');
  const inputEl = document.createElement('input');

  divEl.classList.add('mb-3');
  labelEl.classList.add('form-label');
  inputEl.classList.add('form-control');

  labelEl.htmlFor = fieldName;
  inputEl.id = fieldName;
  inputEl.type = fieldType;

  labelEl.textContent = fieldText;

  divEl.append(labelEl);
  divEl.append(inputEl);

  return divEl;
};

const render = (container, i18n) => {
  const username = generateFormControl('text', 'username', i18n.t('username'));
  container.append(username);
  const password = generateFormControl('password', 'password', i18n.t('password'));
  container.append(password);
  const confirmPassword = generateFormControl('password', 'password', i18n.t('confirmPassword'));
  container.append(confirmPassword);
  const button = document.createElement('button');
  button.type = 'submit';
  button.classList.add('btn', 'btn-primary');
  button.textContent = i18n.t('signupBtn');
  container.append(button);
}

export default async () => {
  const container = document.querySelector('#form');
  const defaultLang = 'ru';
  const i18n = i18next.createInstance();
  await i18n.init({
    lng: defaultLang,
    debug: false,
    resources,
  });

  render(container, i18n);
};
