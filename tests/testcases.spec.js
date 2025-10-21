const {test,expect}= require('@playwright/test');

 test.only('browser context Playwright Test',async ({browser})=>
 {
 const context= await browser.newContext();
 const page= await context. newPage();
 await page.goto("https://parabank.parasoft.com/parabank/register.htm");
 console.log(await page.title());
  await page.locator("[value='Log In']").click();
  await page.locator("[href='register.htm']").click();
  await page.locator("[id='customer.firstName']").fill("Bhimireddy");
  await page.locator("[id='customer.lastName']").fill("Monikas");
  await page.locator("[id='customer.address.street']").fill("Marripalem");
  await page.locator("[id='customer.address.city']").fill("Visakhapatnam");
  await page.locator("[id='customer.address.state']").fill("AndhraPradesh");
  // giveing invaild zipcode //
  await page.locator("[id='customer.address.zipCode']").fill("abcde");
  await page.locator("[id='customer.address.zipCode']").fill("5300013abcd");
  //giving valid zipcode//
//   await page.locator("[id='customer.address.zipCode']").fill("530018");
  // giving invalid phone number//
  await page.locator("[id='customer.phoneNumber']").fill("9876abcd");
  await page.locator("[id='customer.phoneNumber']").fill("98765432#$%^^");
  await page.locator("[id='customer.phoneNumber']").fill("7989591313");
  //giving valid phone number//
  await page.locator("[id='customer.phoneNumber']").fill("7989591313");
  //giving invalid ssn//
  await page.locator("[id='customer.ssn']").fill("12ab34cd");
  await page.locator("[id='customer.ssn']").fill("1234abcd56@4");
  await page.locator("[id='customer.ssn']").fill("1234567");
  await page.locator("[id='customer.ssn']").fill("1234567897800");
  //giving valid ssn//
  await page.locator("[id='customer.ssn']").fill("123456789780");
  //giving invalid inputs//
  await page.locator("[id='customer.username']").fill("bheddymonikas");
  await page.locator("[id='customer.password']").fill("ddtrr65779");
  await page.locator("#repeatedPassword").fill("xfsdytgfgdtrdg");
  //giving vaild inputs//
  await page.locator("[id='customer.username']").fill("bhimireddymonikas");
  await page.locator("[id='customer.password']").fill("monika 2004");
  await page.locator("#repeatedPassword").fill("monika 2004");
  await page.locator("[value='Register']").click();
  await page.pause();
 });