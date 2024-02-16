

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bancodeoccidente.com.co/wps/portal/banco-de-occidente/bancodeoccidente/', { waitUntil: 'networkidle' });


  await page.locator('div:nth-child(2) > span').click();
  await page.getByRole('link', { name: 'Solicítalo ahora' }).nth(1).click();
  await page.getByRole('button', { name: 'Simular mi crédito' }).click();
  await page.getByText('Motocicleta').click();
  await page.locator('form label').filter({ hasText: 'Usado' }).click();
  await page.getByLabel('¿Cuánto es el valor').click();
  await page.getByLabel('¿Cuánto es el valor').fill('$ 900.0000');
  await page.getByLabel('¿Cuánto es el valor').dblclick();
  await page.getByLabel('¿Cuánto es el valor').click();
  await page.getByLabel('¿Cuánto es el valor').fill('$ 3.000.0000');
  await page.locator('.form-conteiner-body > .container-fluid > div').click();
  await page.getByLabel('Ingresa tu cuota inicial').click();
  await page.getByLabel('Ingresa tu cuota inicial').fill('$ 500.0000');
  await page.locator('.form-conteiner-body > .container-fluid > div').click();
  await page.getByLabel('Ingresa tu cuota inicial').dblclick();
  await page.getByLabel('Ingresa tu cuota inicial').click();
  await page.getByLabel('Ingresa tu cuota inicial').fill('$ 900.0000');
  await page.getByRole('button', { name: '60' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByLabel('Tu nombre').click();
  await page.getByLabel('Tu nombre').fill('moises');
  await page.getByLabel('Tu primer apellido').click();
  await page.getByLabel('Tu primer apellido').fill('castro');
  await page.getByLabel('Tu profesión').click();
  await page.getByText('Tu profesiónAbogadoAdministradorArquitectoComunicador SocialContadorDiseñ').click();
  await page.getByLabel('Tu profesión').click();
  await page.locator('li').filter({ hasText: 'Administrador' }).click();
  await page.getByLabel('Tu número de cédula').click();
  await page.getByLabel('Tu número de cédula').fill('1.111.1111');
  await page.getByLabel('Tu fecha de nacimiento').click();
  await page.getByLabel('Tu fecha de nacimiento').click();
  await page.getByLabel('Tu fecha de nacimiento').fill('14/11/1991');
  await page.getByPlaceholder('Ej: Bogotá').click();
  await page.getByPlaceholder('Ej: Bogotá').fill('bucaramanga');
  await page.waitForSelector('elSelectorDelElemento', { state: 'visible' });
  await page.click('elSelectorDelElemento');

  await page.getByText('Acepto acuerdo de firma').click();
  await page.getByText('Autenticación para').click();
  await page.locator('div').filter({ hasText: /^Acuerdo de firma electrónica$/ }).first().click();
  await page.getByRole('img', { name: 'close' }).click();
  await page.getByText('Acepto autorizaciones,').click();
  await page.getByRole('button', { name: 'Continuar' }).click();
});