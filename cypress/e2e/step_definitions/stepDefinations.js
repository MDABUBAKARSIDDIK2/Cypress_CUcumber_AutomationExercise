import {Given, When, And, Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import Data from "../../Testdata/data"; 

const locator= new locatorsPage();
const data= new Data(); 


Given('open  Automationexercise website',function(){ 
    cy.visit(data.URL);
    cy.wait(2000)
})
Then ('Verify that home page is visible successfully',()=> {
    cy.xpath(locator.home_page).should('be.exist')
    cy.xpath(locator.home_page).should('be.visible')
})
When ('Add products to cart',()=> {
    cy.xpath(locator.product).click()
    cy.xpath(locator.add_to_card).click()
    cy.wait(2000)
    cy.xpath(locator.continue_shopping).click({force:true})
})
Then ('Click Cart button',()=>{
    cy.xpath(locator.cart_button).click()

})
Then ('Verify that cart page is displayed',()=>{
    cy.xpath(locator.cart_page).should('be.exist')
    cy.xpath(locator.cart_page).should('be.visible')
})
When('Click Proceed To Checkout',()=>{
    cy.xpath(locator.proceed_to_checkout).click()
    cy.wait(2000)

})
Then('Click Register or Login button',()=> {
    cy.xpath(locator.register_login).click({force:true})
})
When ('Fill all details in Sign up and create account',()=>{
    cy.xpath(locator.name).click({force:true}).type(data.NAME)
    cy.xpath(locator.email_address).click({force:true}).type(data.EMAIL_ADDERSS)
    cy.xpath(locator.signup_button).click()
    cy.wait(2000)
    cy.xpath(locator.title).click()
    cy.xpath(locator.password).click({force:true}).type(data.PASSWORD)
    cy.wait(2000)
    cy.xpath(locator.day).should('be.exist')
    cy.xpath(locator.day).select('13')
    cy.xpath(locator.month).should('be.exist')
    cy.xpath(locator.month).select('June')
    cy.xpath(locator.year).should('be.exist')
    cy.xpath(locator.year).select('1994')
    cy.xpath(locator.signup_newsletter).click()
    cy.xpath(locator.receive_special_offer).click()
    cy.xpath(locator.first_name).click({force:true}).type(data.FIRST_NAME)
    cy.xpath(locator.last_name).click({force:true}).type(data.LAST_NAME)
    cy.xpath(locator.company).click({force:true}).type(data.COMPANY)
    cy.xpath(locator.address).click({force:true}).type(data.ADDRESS)
    cy.xpath(locator.address2).click({force:true}).type(data.ADDRESS2)
    cy.wait(2000)
    cy.xpath(locator.country).should('be.exist')
    cy.xpath(locator.country).select('United States')
    cy.xpath(locator.state).click({force:true}).type(data.STATE)
    cy.xpath(locator.city).click({force:true}).type(data.CITY)
    cy.xpath(locator.zipcode).click({force:true}).type(data.Zipcode)
    cy.xpath(locator.mobile_number).click({force:true}).type(data.MOBILE_NUMBER)
    cy.xpath(locator.create_account).click()

})
Then ('Verify ACCOUNT CREATED and click Continue button',()=>{
    cy.xpath(locator.account_created).should('be.exist')
    cy.xpath(locator.account_created).should('be.visible')
    cy.xpath(locator.continue).click()

})
Then ('Verify Logged in as username at top',()=>{
    cy.xpath(locator.user_name_at_top).should('be.exist')
    cy.xpath(locator.user_name_at_top).should('be.visible')
})
Then ('Verify Address Details and Review Your Order',()=>{
    cy.xpath(locator.address_details).should('be.exist')
    cy.xpath(locator.address_details).should('be.visible')
    cy.xpath(locator.reiew_your_order).should('be.exist')
    cy.xpath(locator.reiew_your_order).should('be.visible')

})
When ('Enter description in comment text area and click Place Order',()=>{
    cy.xpath(locator.enter_description).click({force:true}).type(data.ENTER_DESCRIPTION)
    cy.xpath(locator.place_order).click()
    cy.wait(2000)

})
Then ('Enter payment details Name on Card  Card Number CVC Expiration date',()=>{
    cy.xpath(locator.name_on_card).click({force:true}).type(data.NAME_ON_CARD)
    cy.xpath(locator.card_number).click({force:true}).type(data.CARD_NUMBER)
    cy.xpath(locator.cvc).click({force:true}).type(data.CVC)
    cy.xpath(locator.expiry_month).click({force:true}).type(data.EXPIRY_MONTH)
    cy.xpath(locator.expiry_year).click({force:true}).type(data.EXPIRY_YEAR)

})
Then ('Click Pay and Confirm Order button',()=>{
    cy.xpath(locator.pay_and_confirm_order).click()
    cy.wait(2000)
})
Then ('Verify the success message Your order has been placed successfully',()=>{
    cy.xpath(locator.order_confirm).should('be.exist')
    cy.xpath(locator.order_confirm).should('be.visible')

})


