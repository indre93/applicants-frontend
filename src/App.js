import Applicants from "./components/Applicants";
import useFetch from './useFetch';
import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Because props are only passed from top to bottom in a component tree, App component will handle state and pass it as props to child components.

function App() {
  const { data, error } = useFetch("http://localhost:8000/applicants");

  return (
    <div className="App">
      <div className="App-header">
        <h1>Applicants</h1>
      </div>

      {/* Pass data as props to Applicants component */}
      {/* Use JS logical && operator to conditionally include an element */}
      {/* If applicants state has a value and it evaluates to true, then the element after && will appear in the output */}
      <Container fluid>
        {data && <Applicants applicants={data} />}
        {error && <div>{error}</div>}
      </Container>
    </div>
  );
}

export default App;
