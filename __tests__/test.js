// @ts-check
import { test, expect } from '@playwright/test';


test('first test', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.getByRole('button', { name: /Зарегистрироваться/i })).toBeVisible();
});

