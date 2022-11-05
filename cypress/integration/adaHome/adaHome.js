import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(`I open Ada Home Page`, () => {    
    cy.visit('');
});

Then(`I see Ada School icon`, () => {
    // No existe este elemento.
    //cy.get('.mr-3').should('be.visible');
    
    // Lo correcto sería:
    cy.get("[data-elementor-type='header'] img").should('be.visible')
});

And(`I see the page main Title`, () => {
    // Es incorrecto.
    //cy.get("h1").should('have.text', 'Aprende programación').should('be.visible');
    
    // Lo correcto sería que el elemento contenga el texto.
    cy.get("h1").contains('Aprende a programar').should('be.visible');
});

Given(`I see the social media section`, () => {    
    // No existe este elemento.
    //cy.get('header .text-gray-100').should('be.visible');

    // Lo correcto sería buscar por este elemento.
    cy.get('.elementor-grid').should('be.visible');
});

Then(`I validate {string} icon redirects to {string}`, (socialMedia, url) => {    
    // En este locator uso "header" para asegurarme de obtener el icono del encabezado y no el que sale en el footer de la página.
    //cy.get(`header [aria-label='${socialMedia}']`).should('be.visible');

    // Lo correcto sería: 
    

    // Solo validamos que exista el elemento con la url correcta. No hacemos el click porque abre un nuevo tab y esto sale del scope de Cypress.
    cy.get(`footer a[href='${url}']`).should('exist');

});