import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I navigate to Programs section`, () => {
  cy.visit('');
  cy.get(`[href='/#programas']`).click();
});

When(`The programs section is loaded`, () => {
  cy.get('#programas').should('be.visible');
});

/// <reference types="cypress-xpath" />
Then(`I see the program with title {string}`, (title) => {
    cy.xpath(`//h2[contains(text(),'${title}')]`).should('be.visible'); //Ejemplo de como usar xpath con cypress si llega a ser necesario.
    const programKeyWord = title.split(/(\s+)/)[0]; //Tomamos solo la primera palabra del nombre del programa para posteriormente buscar una imagen cuyo src la contenga
    cy.get(`img[src*='${programKeyWord.toLowerCase()}']`).should('not.be.visible');
});