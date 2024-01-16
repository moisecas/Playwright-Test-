import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bancodeoccidente.com.co/wps/portal/banco-de-occidente/bancodeoccidente/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#cta_persona').getByRole('link', { name: 'Simula y solicita en línea' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Solicita tu crédito' }).click();
  await page1.getByPlaceholder('Ingresa tu cédula').click();
  await page1.getByPlaceholder('Ingresa tu cédula').fill('1095810491');
  await page1.getByPlaceholder('Ingresa tus nombres y').click();
  await page1.getByPlaceholder('Ingresa tus nombres y').fill('moises david ');
  await page1.getByPlaceholder('Ingresa tus nombres y').press('Tab');
  await page1.getByPlaceholder('Ingresa tu correo').fill('moisesjuniorcas');
  await page1.getByPlaceholder('Ingresa tu correo').press('Alt+6');
  await page1.getByPlaceholder('Ingresa tu correo').press('Alt+4');
  await page1.getByPlaceholder('Ingresa tu correo').fill('moisesjuniorcas@gmail.com');
  await page1.getByPlaceholder('Ingresa tu número de teléfono').click();
  await page1.getByPlaceholder('Ingresa tu número de teléfono').fill('3183483807');
  await page1.getByPlaceholder('Ciudad').click();
  await page1.getByPlaceholder('Ciudad').fill('bucara');
  await page1.getByPlaceholder('Ciudad').click();
  await page1.getByPlaceholder('Ciudad').fill('bucaramanga');
  await page1.getByRole('link', { name: 'BUCARAMANGA' }).click();
  await page1.locator('.captcha').click();
  await page1.frameLocator('iframe[name="a-527li6ftwe44"]').getByText('No soy un robot').click();
  await page1.locator('form[name="solicitudViviendaForm"] div').filter({ hasText: 'Debes aceptar los términos y condiciones para continuar Acepto términos y' }).locator('label').click();
  await page1.locator('#contenido-productos').getByRole('button', { name: 'Solicitar' }).click();
}); 