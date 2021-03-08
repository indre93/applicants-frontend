import React from 'react';
import Applicant from './Applicant';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

// ApplicantList component is responsible for fetching and rendering applicants' list
const ApplicantList = () => {
  const url = "http://localhost:8000/applicants";
  // applicants state Hook will be used to hold the state of the fetched data.
  const [applicants, setApplicants] = React.useState(null);
  const [error, setError] = React.useState(null);
  // isLoading state Hook will indicate if data is being fetched.
  const [isLoading, setIsLoading] = React.useState(false);

  const handleDelete = (id) => {
    fetch(url + `/${id}`, {
      method: "DELETE"
    }).then(() => {
      getApplicants();
    });
  };

  const getApplicants = () => {
    fetch(url)
      .then(resp => {
        if (!resp.ok) throw Error("Unable to fetch data");
        return resp.json();
      })
      .then(data => {
        setApplicants(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  // Use useEffect to fetch data once the component mounts or the state changes
  React.useEffect(() => {
    getApplicants();
  }, []);

  return (
    <React.Fragment>
      {/* Include button to add new applicant */}
      <div className="add-btn">
        <Link to="/create">
          <Button variant="outline-dark" size="lg">
            Add New Applicant
          </Button>
        </Link>
      </div>

      {/* Add conditional to display loading indicator if set to true and display error message if any. */}
      {isLoading && <h3>Loading List of Applicants...</h3>}
      {error && <div>{error}</div>}
      {applicants && (
        // Import Table from react-bootstrap for readability and qucik styling
        <Table hover responsive>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Occupation</th>
              <th>SSN</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Use map() method to iterate through the array of objects and send each object to the Applicant component as a prop to be rendered in its own row */}
            {applicants.map((applicant) =>
              <Applicant
                key={applicant.id}
                applicant={applicant}
                handleDelete={handleDelete}
              />
            )}
          </tbody>
        </Table>
      )}
    </React.Fragment>
  );
};

export default ApplicantList;
