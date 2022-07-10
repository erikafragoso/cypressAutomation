import dayjs from 'dayjs'
const faker = require('faker-br');

describe('teste formulario', () => {
  const name = faker.name.firstName()+' '+faker.name.lastName()
  const text = faker.lorem.words()
  const phone = faker.phone.phoneNumber()
  const email = faker.internet.exampleEmail()
  const hourNow = dayjs().format('HH:mm')
  
  before(() => {
      cy.visit('/public/form/6qhKljB1')
      cy.title().should('eq','Pipefy QA Interview Form | 1Pipefy - Pipefy')
      cy.get('.pp-new-public-form-left-title > span').should('have.text','1Pipefy')
      cy.get('.pp-new-public-form-left-title').should('contain','Pipefy QA Interview Form')
      cy.get('[type="button"]').should('be.disabled')
    });
    after(() => {
        cy.contains('*Preencha seu email').should('be.visible')
        cy.get('[data-testid="#email-input"]').type(email)
        cy.get('[type="submit"]').should('not.be.disabled').click()
        cy.contains('Verifique seu email').should('be.visible')
    });
    
    it('Preencher e eviar formulario', () => {
      cy.get('input[name="customFields.your_name"]').should('be.visible').type(name)
      cy.get('textarea[name="customFields.why_do_you_want_to_work_at_pipefy"]').should('be.visible').type(text)
      cy.get('[type="checkbox"]').uncheck().eq(1).check({force: true})
      cy.get('a[name="customFields.select_any_user"]').click()
      cy.get('.pp-display-block').should('be.visible').type('Kaio Azevedo')
      cy.get('.pp-item-list').click() 
      cy.get('#fake-pipe-field-publicForm-customFields_select_today_s_date-input').click({force: true})
      cy.get('.pp-date-picker-actions > .pp-btn').eq(1).click()
      cy.get('select[name="customFields.select_option_b"]').select('B').should('have.value','B')
      cy.get('input[name="customFields.what_time_is_it_now"]').type(hourNow)
      cy.get('input[name="customFields.place_a_phone_number_from_spain_country"]').type(phone)            
      cy.get('[type="button"]').eq(0).should('not.be.disabled').click()
    });

  
});