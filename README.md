## app.js
Реализуйте логику работы формы регистрации нового пользователя.

Форма содержит 3 поля для ввода данных нового пользователя (имя пользователя, пароль, подтверждение пароля) и кнопку регистрации. Все поля формы обязательные, минимум 3, максимум 10 символов. Новый пароль должен совпадать с подтверждением пароля.

При клике на кнопку "Зарегистрироваться" происходит валидация введенных данных. В случае успешной валидации все поля формы подсвечиваются зеленой рамкой. Если возникает ошибка, то поля с ошибками подсвечиваются красной рамкой, а ниже выводится соответствующее сообщение об ошибке.

Все тексты приложения, включая ошибки валидации, должны подставляться через библиотеку [i18next](https://www.i18next.com/).

Для валидации полей формы используйте асинхронную валидацию [yup](https://github.com/jquense/yup).

## src/locales/ru.js
Реализуйте тексты для русскоязычной версии приложения.

## view.js
Реализуйте логику, отвечающую за слой `view` в приложении.

В упражнении подключены стили `bootstrap`. Используйте классы `is-invalid` и `is-valid` для того, чтобы подсветить рамку поля ввода красным или зеленым соответственно. Сообщения об ошибке валидации выводится внутри элемента `div` с классом `invalid-feedback`.
## Примеры

Начальный HTML формы:

```html
      <form id="form" class="col col-sm-8 col-md-5 col-lg-3" >
        <h2 class="mb-5">Регистрация</h2>
        <div class="mb-3">
          <label class="form-label" for="username">Имя пользователя</label>
          <input class="form-control" id="username" type="text" name="username">
          <div class="invalid-feedback" id="error-username"></div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">Пароль</label>
          <input class="form-control" id="password" type="password" name="password">
          <div class="invalid-feedback" id="error-password"></div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="confirmPassword">Подтвердите пароль</label>
          <input class="form-control" id="confirmPassword" type="password" name="confirmPassword">
          <div class="invalid-feedback" id="error-confirmPassword"></div>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Зарегистрироваться</button>
      </form>
```

Форма, содержащая ошибки валидации:
```html
      <form id="form" class="col col-sm-8 col-md-5 col-lg-3">
        <h2 class="mb-5">Регистрация</h2>
        <div class="mb-3">
          <label class="form-label" for="username">Имя пользователя</label>
          <input class="form-control is-invalid" id="username" type="text" name="username">
          <div class="invalid-feedback" id="error-username">минимум 3 cимвола</div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">Пароль</label>
          <input class="form-control is-invalid" id="password" type="password" name="password">
          <div class="invalid-feedback" id="error-password">минимум 6 символов</div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="confirmPassword">Подтвердите пароль</label>
          <input class="form-control is-invalid" id="confirmPassword" type="password" name="confirmPassword">
          <div class="invalid-feedback" id="error-confirmPassword">это обязательное поле</div>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Зарегистрироваться</button>
      </form>
```
Провалидированная форма, готовая к отправке:

```html
      <form id="form" class="col col-sm-8 col-md-5 col-lg-3">
        <h2 class="mb-5">Регистрация</h2>
        <div class="mb-3">
          <label class="form-label" for="username">Имя пользователя</label>
          <input class="form-control is-valid" id="username" type="text" name="username">
          <div class="invalid-feedback" id="error-username"></div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">Пароль</label>
          <input class="form-control is-valid" id="password" type="password" name="password">
          <div class="invalid-feedback" id="error-password"></div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="confirmPassword">Подтвердите пароль</label>
          <input class="form-control is-valid" id="confirmPassword" type="password" name="confirmPassword">
          <div class="invalid-feedback" id="error-confirmPassword"></div>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Зарегистрироваться</button>
      </form>
```

## Подсказки
* Для реализации переводов множественной формы вы можете воспользоваться [возможностями библиотеки i18next](https://www.i18next.com/translation-function/plurals)
* Каждый запуск приложения должен создавать свой собственный [экземпляр i18next](https://www.i18next.com/overview/api#instance-creation)
* Для кастомизации сообщений ошибок валидации воспользуйтесь [функцией setLocale](https://github.com/jquense/yup#localization-and-i18n) библиотеки `yup`
* Используйте [on-change](https://github.com/sindresorhus/on-change), чтобы "слушать" нужные части состояния и вызывать соответствующие функции рендеринга при их изменении. 
* [опция abortEarly](https://github.com/jquense/yup#schemavalidatevalue-any-options-object-promiseinfertypeschema-validationerrorss) библиотеки `yup`


