import {test, expect} from '@playwright/test';

test('get api call', async({request}) =>{
   const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

   expect(response.status()).toBe(200);

   const apirespoinsebody = await  response.json();
// console.log("apiresponse : ",apirespoinsebody);
  console.log(JSON.stringify(apirespoinsebody,null,5));
    console.log("name : ",apirespoinsebody.name);

})

test('create user', async ({request})=>{

   const requestBody  = {
      name: "playwright",
        username: "playwright API",
        email: "api@playwright.com"
   }
   const response = await request.post('https://jsonplaceholder.typicode.com/users', 
      {
         data : requestBody
      }
   )

   expect(response.status()).toBe(201);
   const responseBody = await response.json();
   console.log('responseBody : ',responseBody)

})