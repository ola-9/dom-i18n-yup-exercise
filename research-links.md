https://lightrun.com/solutions/jaredpalmer-formik-yup-schemavalidate-options-show-every-error-of-a-field-at-the-same-time/

https://mainmatter.com/blog/2021/12/08/validations-in-ember-apps/

```js
elements.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData);
    try {
      await schema.validate(newUser, { abortEarly: false });
      watchedState.form.errors = [];
      watchedState.form.valid = true;
      watchedState.form.status = 'submitting';
      console.log('do something');
    } catch (err) {
      // err.errors.map((e) => {
      //   // console.log(e)
      //   console.log(i18n.t(e.key, e.values))
      // });

      let validationErrors = []
      err.inner.forEach(error => {
        validationErrors.push({ field: error.path, errDetail: error.message })
      })
      watchedState.form.errors = validationErrors;
    }
  })
```
