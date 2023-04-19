import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost/');
  await page.getByRole('button', { name: 'Зарегистрироваться' }).click();
  await page.getByLabel('Имя пользователя').click();
  await page.getByLabel('Имя пользователя').fill('longtestingname');
  await page.getByRole('button', { name: 'Зарегистрироваться' }).click();
  await page.getByText('РегистрацияИмя пользователямаксимум 10 символовПарольминимум 6 символовПодтверди').click();
  await page.getByLabel('Имя пользователя').click();
  await page.getByLabel('Имя пользователя').click();
  await page.getByLabel('Пароль', { exact: true }).click();
  await page.getByLabel('Пароль', { exact: true }).fill('12345');
  await page.getByLabel('Подтвердите пароль').click();
  await page.getByLabel('Подтвердите пароль').fill('12345');
  await page.getByRole('button', { name: 'Зарегистрироваться' }).click();
  await page.getByLabel('Пароль', { exact: true }).click();
  await page.getByLabel('Пароль', { exact: true }).fill('123456');
  await page.getByRole('button', { name: 'Зарегистрироваться' }).click();
  await page.getByLabel('Подтвердите пароль').click();
  await page.getByLabel('Подтвердите пароль').fill('123456');
  await page.getByRole('button', { name: 'Зарегистрироваться' }).click();
  await page.getByLabel('Имя пользователя').click();
  await page.getByLabel('Имя пользователя').fill('l');
});
