import React from 'react';
import Applicants from "./components/Applicants";
import useFetch from './useFetch';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AddApplicant from "./components/AddApplicant";

// Add Route to render the specified component when the path matches the current URL.
// Add Switch to render the first Route that matches the url
function App() {
  // Desctructure the useFetch component
  const { data, error, isPending } = useFetch("http://localhost:8000/applicants");

  return (
    <React.Fragment>
      <div className="App">
        <div className="App-header">
          <h1>Applicants</h1>
        </div>

        <Container>
          {/* Use Switch to ensure only one route shows at a time */}
          {/* The component in the Route will be shown when visiting specified route path  */}
          <Switch>
            <Route path="/create" component={AddApplicant} />
            <Route path="/edit/:id" component={EditApplicant} />
          </Switch>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
