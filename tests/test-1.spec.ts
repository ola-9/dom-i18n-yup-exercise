import { test, expect } from '@playwright/test';

test('html', async ({ page }) => {
  await page.goto('http://localhost/');

  await expect(page.getByText('Имя пользователя')).toBeVisible();
  await expect(page.getByText('Пароль', { exact: true })).toBeVisible();
  await expect(page.getByText('Подтвердите пароль')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Зарегистрироваться' })).toBeVisible();
});
