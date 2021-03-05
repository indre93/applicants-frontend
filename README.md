# applicants-list-frontend
Initialized application using create-react-app and removed all files from the src directory except for App.js, App.css, and index.js.

To help keep code organized and maintainable, I used 3 components:

- App component is at the top level and it's responsible for storing state.
- Applicants component is responsible for rendering the list of applicants.
- Applicant component is responsible for rendering each applicant's properties: first name, last name, occupation, and ssn.

## json-server
Used json-server library to create fake API with CRUD functionality. To accomplish this, in the application root's directory I created a data folder, and then a db.json file with some mock json.

- To run the server type: `$ npx json-server --watch data/db.json --port 8000`

( Note: Specify port number otherwise it will automatically try to go to port 3000)

## React Hooks
> To avoid writing class components and stick to functional components, I utilized State Hooks and Effect Hooks.

- Created a Custom Hook useFetch to handle fetching data and make it reusable.

## react-router-dom
Utilized react-router-dom for routing and navigating to:

- home page (/), which displays all applicants.
- create page (/create), which displays form to add a new applicant.
- update page (/edit), which displays form to update an existing applicant.

## react-bootstrap
Utilized react-bootstrap framework for quick styling

- Installed framework: `$ npm install react-bootstrap bootstrap`

- Then imported the following in index.js: `$ import 'bootstrap/dist/css/bootstrap.min.css';`


