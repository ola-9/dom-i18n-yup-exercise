import { test, expect } from '@playwright/test';

test('valid form', async ({ page }) => {
  await page.goto('http://localhost/');
  
  await page.getByLabel('Имя пользователя').click();
  await page.getByLabel('Имя пользователя').fill('user');
  await page.getByLabel('Пароль', { exact: true }).click();
  await page.getByLabel('Пароль', { exact: true }).fill('123456');
  await page.getByLabel('Подтвердите пароль').click();
  await page.getByLabel('Подтвердите пароль').fill('123456');
  await page.getByRole('button', { name: 'Зарегистрироваться' }).click();

  await expect(page.getByLabel('Имя пользователя')).toHaveClass('form-control is-valid');
  await expect(page.getByLabel('Пароль', { exact: true })).toHaveClass('form-control is-valid');
  await expect(page.getByLabel('Подтвердите пароль')).toHaveClass('form-control is-valid');
});
