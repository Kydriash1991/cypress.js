describe('Тестирование формы логина', function () {
   it('Ввести верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000)
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})
describe('Тестирование логики восстановления пароля', function () {
   it('Ввести mail и нажать кнопку восстановить пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('romkyd@bk.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})
describe('№1 Негативный кейс авторизации', function () {
   it('Ввести верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('ystalia');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})
describe('№2 Негативный кейс авторизации', function () {
   it('Ввести не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('zhopa@.gorit.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})
describe('№3 Негативный кейс авторизации', function () {
   it('Ввести логин без @ и ввести верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('zhopa.gorit.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})
describe(' Кейс авторизации на приведение к строчным буквам в логине', function () {
   it('Ввести логин строчные буквы и ввести верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})
describe(' Оформление заказа в HuntingPony', function () {
   it('Положить в корзину и измени количество на 2шт и оформить заказ', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="338934699"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.add-cart-counter__detail').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа').should('be.visible');
    })
})