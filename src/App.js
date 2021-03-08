import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ApplicantList from './components/ApplicantList';
import AddApplicant from "./components/AddApplicant";
import EditApplicant from "./components/EditApplicant";

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
          <Switch>
            <Route exact path="/">
              <ApplicantList
                applicants={applicants}
                error={error}
                isLoading={isLoading}
                handleDelete={handleDelete}
              />
            </Route>
            <Route path="/create" component={AddApplicant} />
            <Route path="/edit/:id" component={EditApplicant} />
          </Switch>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
