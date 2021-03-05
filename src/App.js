import React from 'react';
import Applicants from "./components/Applicants";
import useFetch from './useFetch';
import './App.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreateApplicant from "./components/CreateApplicant";

// Because props are only passed from top to bottom in a component tree, App component will handle state and pass it as props to child components.

function App() {
  // Desctructure the useFetch component
  const { data, error, isPending } = useFetch("http://localhost:8000/applicants");

  return (
    // So we can use Router in the entire application
    <Router>
      <div className="App">
        <div className="App-header">
          <Link to="/"><h1>Applicants</h1></Link>
        </div>

        <Container>
          {/* Use Switch to ensure only one route shows at a time */}
          {/* The component in the Route will be shown when visiting specified route path  */}
          <Switch>
            <Route exact path="/">
              {/* Pass data as props to Applicants component */}
              {/* Use JS logical && operator to conditionally include an element */}
              {/* If applicants state has a value and it evaluates to true, then the element after && will appear in the output */}
              {isPending && <h3>Loading...</h3>}
              {error && <div>{error}</div>}
              {data && <Applicants applicants={data} />}
            </Route>
            <Route path="/create">
              <CreateApplicant />
            </Route>
          </Switch>
        </Container>

      </div>
    </Router>
  );
}

export default App;
