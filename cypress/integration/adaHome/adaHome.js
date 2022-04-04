import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(`I open Ada Home Page`, () => {
  cy.visit('');
});

Then(`I see Ada School icon`, () => {
  cy.get('.mr-3').should('be.visible');
});

And(`I see the page main Title`, () => {
  cy.get("h1").should('have.text', 'Aprende programación').should('be.visible');
});

Given(`I see the social media section`, () => {
  cy.get('header .text-gray-100').should('be.visible');
});

Then(`I validate {string} icon redirects to {string}`, (socialMedia, url) => {
  cy.get(`header [aria-label='${socialMedia}']`) //En este locator uso "header" para asegurarme de obtener el icono del encabezado y no el que sale en el footer de la página
    .should('be.visible');
  cy.get(`header [href='${url}']`).should('exist'); //Solo validamos que exista el elemento con la url correcta. No hacemos el click porque abre un nuevo tab y esto sale del scopre de cypress
});