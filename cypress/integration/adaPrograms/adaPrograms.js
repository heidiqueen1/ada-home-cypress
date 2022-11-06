import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I navigate to Programs section`, () => {
  cy.visit('');
  cy.get(`[href='/#programas']`).click();
});

When(`The programs section is loaded`, () => {
  cy.get('#programas').should('be.visible');
});


Then(`I see the program with title {string}`, (title) => {
  cy.xpath(`//h3[contains(text(),'${title}')]`).should('be.visible'); //Ejemplo de como usar xpath con cypress si llega a ser necesario.
  const programKeyWord = title.split(/(\s+)/)[0]; //Tomamos solo la primera palabra del nombre del programa para posteriormente buscar una imagen cuyo src la contenga
  cy.get(`[href*='${programKeyWord.toLowerCase()}']`).should('be.visible');
});
