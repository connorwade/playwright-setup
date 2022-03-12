import test, { APIRequest, expect } from "@playwright/test";

const pokemonName = 'bulbasaur';

let apiContext:any;

test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
        // All requests we send go to this API endpoint.
        baseURL: 'https://pokeapi.co',
        extraHTTPHeaders: {
            //Set Headers
            //add authorization you might need here as well under:
            //'Authorization': 
        }
    })
}) 

test.afterAll(async ({ }) => {
    //dispose all responses
    await apiContext.dispose();
})

test('should get Bulbasaur', async ({ request }) => {
    const pokemon = await apiContext.get(`/api/v2/pokemon/${pokemonName}/`)
    expect(pokemon.ok()).toBeTruthy();
    expect(pokemon.name).toBe(pokemonName)
})

//Store Authorization Example:
// const requestContext = await request.newContext({
//     httpCredentials: {
//       username: 'user',
//       password: 'passwd'
//     }
//   });
//   await requestContext.get(`https://api.example.com/login`);
//   // Save storage state into the file.
//   await requestContext.storageState({ path: 'state.json' });
  
//   // Create a new context with the saved storage state.
//   const context = await browser.newContext({ storageState: 'state.json' });