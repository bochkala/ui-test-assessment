import { Locator, Page } from '@playwright/test';
import path from 'path';
const __dirname = path.dirname(__filename);

export class HomePage {
    readonly page: Page;
    readonly viewSelectedData: Locator;

    constructor(page: Page) {
        this.page = page;
        this.viewSelectedData = this.page.getByRole('button', { name: 'View selected data' });
    }

    async goto() {
        const appPath = __dirname.split('/e2e/pages')[0]
        await this.page.goto(`file://${appPath}/employees.html`);
    }

    async selectEmployee(firstName: string) {
        await this.page.getByRole('gridcell', { name: firstName }).locator('.jqx-tree-grid-checkbox').click();
    }

    async showEmpolyeesData(employees: any) {
        for (const employee of employees) {
            await this.selectEmployee(employee.firstName);
        }
        await this.viewSelectedData.click();
    }
}
