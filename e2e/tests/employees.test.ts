import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/home.page';

// The PO has requested us to verify that we can see the city of origin of selected
// employees in a list.
test.describe('Employees e2e tests',async () => {

    const EMPLOYEES = [
        { firstName: 'Andrew', originCity: 'Tacoma'},
        { firstName: 'Margaret', originCity: 'Redmond'},
        { firstName: 'Steven', originCity: 'London'},
    ];

    test('Verify city of origin being displayed', async({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await homePage.showEmpolyeesData(EMPLOYEES);
        for (const employee of EMPLOYEES) {
            await expect.soft(page.getByText(`${employee.firstName} is from ${employee.originCity}`)).toBeVisible();
        }
    })
});
