# PetStore -> React + TypeScript + Vite
To run this project locally:

```js
   Install node modules: npm i
   Run local App: npm run dev
   To run e2e cypress test: npx cypress open
   Unit test: npm test
``` 

Scope of the project:
   - Implemented login for the SPA in react context
   - Have not implemented persistence login, (for demo purpose localstorage or browser storage can be implemented)
   - For simplicity, max of 100 items are fetched from the API
   - Most of the items are returning 404 images so in that case implemented onError to provide default image.
   - User can update the status of the items. Once successfully updated user will be taken to updated status page.
   - have implemeted one e2e test in cypress for login flow
   - and one unit test for dashboard page
   
