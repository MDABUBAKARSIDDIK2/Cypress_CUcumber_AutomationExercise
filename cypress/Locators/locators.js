class locatorsPage {

  // Home page
  home_page = "//a[normalize-space()='Home']"
  //product
  product ="//a[@href='/products']"
  add_to_card = "(//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart'])[1]"
  continue_shopping = "//button[normalize-space()='Continue Shopping']"
  //cart
  cart_button = "(//i[@class='fa fa-shopping-cart'])[1]"
  cart_page ="//a[normalize-space()='Cart']"
  proceed_to_checkout = "//a[normalize-space()='Proceed To Checkout']"
  register_login = "//u[normalize-space()='Register / Login']"
  //Signup/login
  name ="//input[@placeholder='Name']"
  email_address ="//input[@data-qa='signup-email']"
  signup_button ="//button[normalize-space()='Signup']"
  title = "//input[@id='id_gender1']"
  password = "//input[@id='password']"
  day= "//select[@id='days']"
  month = "//select[@id='months']"
  year = "//select[@id='years']"
  signup_newsletter = "//input[@id='newsletter']"
  receive_special_offer = "//input[@id='optin']"
  first_name = "//input[@id='first_name']"
  last_name= "//input[@id='last_name']"
  company ="//input[@id='company']"
  address ="//input[@id='address1']"
  address2= "//input[@id='address2']"
  country = "//select[@id='country']"
  state = "//input[@id='state']"
  city = "//input[@id='city']"
  zipcode = "//input[@id='zipcode']"
  mobile_number ="//input[@id='mobile_number']"
  create_account = "//button[normalize-space()='Create Account']"
  //Account created
  account_created = "//b[normalize-space()='Account Created!']"
  continue = "//a[normalize-space()='Continue']"
  user_name_at_top = "//b[normalize-space()='Md Abu Bakar Siddik']"
  ///Cart
  address_details ="//h2[normalize-space()='Address Details']"
  reiew_your_order = "//h2[normalize-space()='Review Your Order']"
  enter_description = "//textarea[@name='message']"
  place_order = "//a[normalize-space()='Place Order']"
  //payment
  name_on_card = "//input[@name='name_on_card']"
  card_number = "//input[@name='card_number']"
  cvc = "//input[@placeholder='ex. 311']"
  expiry_month = "//input[@placeholder='MM']"
  expiry_year = "//input[@placeholder='YYYY']"
  pay_and_confirm_order = "//button[@id='submit']"
  //Order placed
  order_confirm = "//p[normalize-space()='Congratulations! Your order has been confirmed!']"





}
export default locatorsPage;