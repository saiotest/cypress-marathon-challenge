describe('22038 | TS: ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
    beforeEach('Usuario debe esta en la Página web de Demo QA en la sección de Text-box', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.url().should('contains', 'text-box');
    })
    it('22039 | TC1: Validar que al ingresar datos validos en todos los campos se muestren los mensajes esperados.', () => {
        cy.fixture("data/GX-22038-TextBox.json").then((the) =>
        {
            textForm.enterName(the.fullname.data.filled);
            textForm.enterEmail(the.email.data.valid);
            textForm.enterCurrentAddress(the.currentAddress.data.filled);
            textForm.enterPermanentAddress(the.permanentAddress.data.filled);
            textForm.get.submitBtn().click();
            textForm.get.textBox().should('contain.text', (the.fullname.data.filled), (the.email.data.valid), (the.currentAddress.data.filled), (the.permanentAddress.data.filled));
        });
    });
    it('22039 | TC2: Validar que al enviar campos vacios en “Full name”, “Current Address” and “Permanent Address” ,  no se muestre ningún mensaje.', () => {
        cy.fixture("data/GX-22038-TextBox.json").then((the) =>
        {
            textForm.get.submitBtn().click();
            textForm.get.textBox().should('not.exist');
        });
    });
    it('22039 | TC3: Validar que al enviar un  email  que no contenga “@” se muestre un borde rojo en "class="mr-sm-2 field-error form-control"', () =>
    {
        cy.fixture("data/GX-22038-TextBox.json").then((the) =>
        {
            textForm.enterEmail(the.email.data.invalid.invalidEmail1);
            textForm.get.submitBtn().click();
            textForm.get.redBorder().should('have.css', 'border-color', 'rgb(255, 0, 0)');
            
        });
    });
    it('22039 | TC4: Validar que al enviar un  email  que no contenga “mínimo un carácter alfanumérico antes de @ ” se muestre un borde rojo en "class="mr-sm-2 field-error form-control"', () =>
    {
        cy.fixture("data/GX-22038-TextBox.json").then((the) =>
        {
            textForm.enterEmail(the.email.data.invalid.invalidEmail2);
            textForm.get.submitBtn().click();
            textForm.get.redBorder().should('have.css', 'border-color', 'rgb(255, 0, 0)');
        });
    });
    it('22039 | TC5: Validar que al enviar un  email  que no contenga “mínimo un carácter alfanumérico después de @ ” se muestre un borde rojo en "class="mr-sm-2 field-error form-control"', () =>
    {
        cy.fixture("data/GX-22038-TextBox.json").then((the) =>
        {
            textForm.enterEmail(the.email.data.invalid.invalidEmail3);
            textForm.get.submitBtn().click();
            textForm.get.redBorder().should('have.css', 'border-color', 'rgb(255, 0, 0)');
        });
    });
    it('22039 | TC6: Validar que al enviar un  email  que no contenga “ (.) despues de al menos un caracter alfanumerico despues de @ ” se muestre un borde rojo en "class="mr-sm-2 field-error form-control"', () =>
    {
        cy.fixture("data/GX-22038-TextBox.json").then((the) =>
        {
            textForm.enterEmail(the.email.data.invalid.invalidEmail4);
            textForm.get.submitBtn().click();
            textForm.get.redBorder().should('have.css', 'border-color', 'rgb(255, 0, 0)');
            cy.get('.field-error').should('have.css', 'border-color', 'rgb(255, 0, 0)');
        });
    });
    it('22039 | TC7: Validar que al enviar un  email  que no contenga “mínimo 2 carácteres alfanuméricos despues del  (.) ” se muestre un borde rojo en "class="mr-sm-2 field-error form-control"', () =>
    {
         cy.fixture("data/GX-22038-TextBox.json").then((the) =>
        {
            textForm.enterEmail(the.email.data.invalid.invalidEmail5);
            textForm.get.submitBtn().click();
            textForm.get.redBorder().should('have.css', 'border-color', 'rgb(255, 0, 0)');
        });
    });
})
import { textForm } from '@pages/Elements/GX-22038-TextBox.Page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
